import streamlit as st
import pandas as pd


def render_reports(conn):

    st.markdown('<div id="reports"></div>', unsafe_allow_html=True)

    st.title("📄 Reports")
    st.caption("Generate and download reports from the Indian Automobile Market Analytics platform.")

    st.markdown("---")

    # ==========================================
    # DASHBOARD SUMMARY
    # ==========================================

    summary = pd.read_sql(
        """
        SELECT
            (SELECT SUM(units_sold) FROM sales) AS total_sales,
            (SELECT COUNT(*) FROM brands) AS total_brands,
            (SELECT COUNT(*) FROM models) AS total_models,
            (SELECT COUNT(*) FROM categories) AS total_categories;
        """,
        conn,
    )

    c1, c2, c3, c4 = st.columns(4)

    with c1:
        st.metric(
            "🚗 Total Units Sold",
            f"{int(summary.loc[0,'total_sales']):,}"
        )

    with c2:
        st.metric(
            "🏭 Brands",
            int(summary.loc[0,"total_brands"])
        )

    with c3:
        st.metric(
            "🚙 Models",
            int(summary.loc[0,"total_models"])
        )

    with c4:
        st.metric(
            "📂 Categories",
            int(summary.loc[0,"total_categories"])
        )

    st.markdown("---")

    # ==========================================
    # SALES REPORT
    # ==========================================

    st.subheader("📊 Sales Report")

    sales = pd.read_sql(
        """
        SELECT
            s.sale_id,
            b.brand_name,
            m.model_name,
            c.category_name,
            s.sales_year,
            s.sales_month,
            s.units_sold,
            m.fuel_type,
            m.avg_price,
            (s.units_sold * m.avg_price) AS estimated_revenue
        FROM sales s
        JOIN models m
            ON s.model_id = m.model_id
        JOIN brands b
            ON m.brand_id = b.brand_id
        JOIN categories c
            ON m.category_id = c.category_id
        ORDER BY
            s.sales_year,
            s.sales_month,
            b.brand_name,
            m.model_name;
        """,
        conn,
    )

    st.dataframe(
        sales,
        width="stretch",
        hide_index=True,
    )

    st.markdown("---")

    # ==========================================
    # DOWNLOAD CSV
    # ==========================================

    st.subheader("📥 Download Report")

    csv = sales.to_csv(index=False).encode("utf-8")

    st.download_button(
        label="⬇ Download Sales Report (CSV)",
        data=csv,
        file_name="Indian_Automobile_Market_Report.csv",
        mime="text/csv",
        width="stretch",
    )

    st.success("Report generated successfully.")

    st.caption(
        "The downloaded CSV contains sales, brand, model, category, fuel type, average price, and estimated revenue."
    )
