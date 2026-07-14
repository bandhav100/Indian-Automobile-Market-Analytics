import streamlit as st
import pandas as pd
import plotly.express as px
from pathlib import Path
LOGO_DIR = Path(__file__).parent.parent / "carlogos"

LOGO_MAP = {
    "BYD": "BYD_Logo-removebg-preview.png",
    "Citroen": "Citroen-removebg-preview.png",
    "Hyundai": "hyundai.png",
    "Kia": "Kia-removebg-preview.png",
    "MG": "mg.png",
    "Mahindra": "Mahindra_ev-removebg-preview.png",
    "Maruti Suzuki": "maruti_suzuki.png",
    "Tata": "Tata-removebg-preview.png",
}
def render_ev_analysis(conn):
    st.markdown('<div id="ev-analysis"></div>', unsafe_allow_html=True)

    st.title("⚡ Electric Vehicle Analysis")
    st.caption("Indian Passenger Electric Vehicle Market Analytics Dashboard")

    # ==========================
    # KPI SECTION
    # ==========================

    kpi_query = """
    SELECT
        (SELECT SUM(units_sold) FROM ev_monthly_sales) AS total_sales,
        (SELECT COUNT(*) FROM ev_models) AS total_models,
        (SELECT COUNT(DISTINCT brand_name) FROM ev_models) AS total_brands,
        (SELECT AVG(battery_capacity_kwh) FROM ev_models) AS avg_battery,
        (SELECT AVG(claimed_range_km) FROM ev_models) AS avg_range,
        (SELECT AVG(avg_price_inr) FROM ev_models) AS avg_price;
    """

    kpi = pd.read_sql(kpi_query, conn)

    c1, c2, c3 = st.columns(3)

    with c1:
        st.metric(
            "🚗 Total EV Sales",
            f"{int(kpi.loc[0, 'total_sales']):,}"
        )

    with c2:
        st.metric(
            "🚙 EV Models",
            int(kpi.loc[0, "total_models"])
        )

    with c3:
        st.metric(
            "🏭 EV Brands",
            int(kpi.loc[0, "total_brands"])
        )

    c4, c5, c6 = st.columns(3)

    with c4:
        st.metric(
            "🔋 Avg Battery",
            f"{kpi.loc[0, 'avg_battery']:.1f} kWh"
        )

    with c5:
        st.metric(
            "⚡ Avg Range",
            f"{kpi.loc[0, 'avg_range']:.0f} km"
        )

    with c6:
        st.metric(
            "💰 Avg Price",
            f"₹{kpi.loc[0, 'avg_price']/100000:.2f} L"
        )

    st.markdown("----")
    
    st.subheader("🚗 Passenger EV Brands")

    brands = pd.read_sql(
        """
        SELECT DISTINCT brand_name
        FROM ev_models
        ORDER BY brand_name;
        """,
        conn,
    )

    cols = st.columns(len(brands))

    for col, (_, row) in zip(cols, brands.iterrows()):
        brand = row["brand_name"]

        logo_file = LOGO_MAP.get(brand)

        with col:
            if logo_file:
                logo_path = LOGO_DIR / logo_file

                if logo_path.exists():
                    st.image(str(logo_path), width=90)

            st.markdown(
                f"""
                <div style="text-align:center; font-weight:600; font-size:14px;">
                    {brand}
                </div>
                """,
                unsafe_allow_html=True,
            )
        # ==========================
    # YEAR-WISE SALES
    # ==========================

    st.subheader("📈 Year-wise EV Sales Trend")

    yearly_sales = pd.read_sql(
        """
        SELECT
            sales_year,
            SUM(units_sold) AS total_sales
        FROM ev_monthly_sales
        GROUP BY sales_year
        ORDER BY sales_year;
        """,
        conn,
    )

    fig = px.line(
        yearly_sales,
        x="sales_year",
        y="total_sales",
        markers=True,
        title="Indian Passenger EV Sales by Year",
    )

    fig.update_layout(
        template="plotly_dark",
        height=500,
    )

    st.plotly_chart(fig, width="stretch")

    st.markdown("---")

    st.subheader("🥧 EV Brand Market Share")

    brand_sales = pd.read_sql(
        """
        SELECT
            brand_name,
            SUM(units_sold) AS total_sales
        FROM ev_monthly_sales
        GROUP BY brand_name
        ORDER BY total_sales DESC;
        """,
        conn,
    )

    fig = px.pie(
        brand_sales,
        names="brand_name",
        values="total_sales",
        hole=0.45,
        title="EV Brand Market Share"
    )

    fig.update_layout(
        template="plotly_dark",
        height=500,
    )

    st.plotly_chart(fig, width="stretch")



    st.markdown("---")
    st.subheader("🚗 Top Selling EV Models")

    top_models = pd.read_sql(
        """
        SELECT
            model_name,
            SUM(units_sold) AS total_sales
        FROM ev_monthly_sales
        GROUP BY model_name
        ORDER BY total_sales DESC
        LIMIT 10;
        """,
        conn,
    )

    fig = px.bar(
        top_models,
        x="total_sales",
        y="model_name",
        orientation="h",
        text="total_sales",
        title="Top 10 Selling EV Models"
    )

    fig.update_layout(
        template="plotly_dark",
        height=550,
        xaxis_title="Units Sold",
        yaxis_title="Model"
    )

    st.plotly_chart(fig, width="stretch")
    st.markdown("---")
    st.subheader("⚖️ EV Model Comparison")

    models = pd.read_sql(
        """
        SELECT model_name
        FROM ev_models
        ORDER BY model_name;
        """,
        conn,
    )

    c1, c2 = st.columns(2)

    with c1:
        model1 = st.selectbox(
            "Select First EV",
            models["model_name"],
            key="ev_model_1",
        )

    with c2:
        model2 = st.selectbox(
            "Select Second EV",
            models["model_name"],
            index=1 if len(models) > 1 else 0,
            key="ev_model_2",
        )

    comparison = pd.read_sql(
        """
        SELECT
            brand_name,
            model_name,
            category,
            battery_capacity_kwh,
            claimed_range_km,
            motor_power_hp,
            charging_type,
            avg_price_inr
        FROM ev_models
        WHERE model_name IN (%s, %s)
        ORDER BY model_name;
        """,
        conn,
        params=(model1, model2),
    )

    comparison["avg_price_inr"] = (
        comparison["avg_price_inr"] / 100000
    ).round(2)

    comparison.rename(
        columns={
            "brand_name": "Brand",
            "model_name": "Model",
            "category": "Category",
            "battery_capacity_kwh": "Battery (kWh)",
            "claimed_range_km": "Range (km)",
            "motor_power_hp": "Power (HP)",
            "charging_type": "Charging",
            "avg_price_inr": "Price (₹ Lakh)",
        },
        inplace=True,
    )

    st.dataframe(
        comparison,
        width="stretch",
        hide_index=True,
    )
    st.markdown("---")
    st.subheader("🥧 EV Brand Market Share")

    comparison = pd.read_sql(
        """
        SELECT
            m.brand_name,
            COUNT(DISTINCT m.model_name) AS models,
            ROUND(AVG(m.battery_capacity_kwh),2) AS avg_battery,
            ROUND(AVG(m.claimed_range_km),0) AS avg_range,
            ROUND(AVG(m.avg_price_inr)/100000,2) AS avg_price_lakh,
            SUM(s.units_sold) AS total_sales
        FROM ev_models m
        JOIN ev_monthly_sales s
            ON m.brand_name=s.brand_name
            AND m.model_name=s.model_name
        GROUP BY m.brand_name
        ORDER BY total_sales DESC;
        """,
        conn,
    )

    st.dataframe(
        comparison,
        width="stretch",
        hide_index=True,
    )

    
