from pathlib import Path
import base64

import numpy as np
import pandas as pd
import plotly.express as px
import psycopg2
import streamlit as st
import streamlit.components.v1 as components
from sklearn.linear_model import LinearRegression
from st_aggrid import AgGrid, GridOptionsBuilder
from st_aggrid.shared import JsCode
from ev_analysis import render_ev_analysis
from reports import render_reports
APP_ICON_PATH = Path(__file__).parent / "static" / "flags" / "in.png"


def image_to_data_uri(image_path):
    return f"data:image/png;base64,{base64.b64encode(image_path.read_bytes()).decode('ascii')}"


def get_connection():
    return psycopg2.connect(
        host=st.secrets["DB_HOST"],
        database=st.secrets["DB_NAME"],
        user=st.secrets["DB_USER"],
        password=st.secrets["DB_PASSWORD"],
        port=st.secrets["DB_PORT"],
        sslmode="require"
    )


st.set_page_config(
    page_title="Indian Passenger Vehicle Market Analytics",
    page_icon=str(APP_ICON_PATH),
    layout="wide"
)

logo_folder = Path(__file__).parent.parent / "carlogos"

logos = [
    ("chevrolet.png", "Chevrolet"),
    ("datsun.png", "Datsun"),
    ("fiat.png", "Fiat"),
    ("ford.png", "Ford"),
    ("honda.png", "Honda"),
    ("hyundai.png", "Hyundai"),
    ("kia.png", "Kia"),
    ("mahindra.png", "Mahindra"),
    ("maruti_suzuki.png", "Maruti Suzuki"),
    ("mg.png", "MG"),
    ("mitsubishi.png", "Mitsubishi"),
    ("nissan.png", "Nissan"),
    ("renault.png", "Renault"),
    ("skoda.png", "Skoda"),
    ("tata_motors.png", "Tata Motors"),
    ("toyota.png", "Toyota"),
    ("volkswagen.jpeg", "Volkswagen")
]


def render_brand_logo_strip():
    st.markdown(
        """
<style>
.logo-card{
    background:transparent;
    border:none;
    padding:10px 0;
}
</style>
""",
        unsafe_allow_html=True
    )

    st.markdown('<div class="logo-card">', unsafe_allow_html=True)
    columns = st.columns(len(logos))
    for column, (file_name, _brand_name) in zip(columns, logos):
        image_path = logo_folder / file_name
        with column:
            if image_path.exists():
                st.image(str(image_path), width=75)
    st.markdown("</div>", unsafe_allow_html=True)


def render_section_heading(title, chip):
    icon_map = {
        "Origin": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M12 21s6-4.8 6-10a6 6 0 1 0-12 0c0 5.2 6 10 6 10z' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'/><circle cx='12' cy='11' r='2.2' fill='currentColor'/></svg>",
        "Summary": "<svg viewBox='0 0 24 24' aria-hidden='true'><rect x='4' y='4' width='16' height='16' rx='3' fill='none' stroke='currentColor' stroke-width='1.8'/><path d='M8 8h8M8 12h8M8 16h5' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'/></svg>",
        "Sales": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M5 19h14' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'/><rect x='6' y='11' width='3' height='6' rx='0.8' fill='currentColor'/><rect x='11' y='8' width='3' height='9' rx='0.8' fill='currentColor'/><rect x='16' y='5' width='3' height='12' rx='0.8' fill='currentColor'/></svg>",
        "Monthly": "<svg viewBox='0 0 24 24' aria-hidden='true'><rect x='4' y='5' width='16' height='15' rx='2' fill='none' stroke='currentColor' stroke-width='1.8'/><path d='M4 9h16M8 3v4M16 3v4' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'/></svg>",
        "Trend": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M4 17l5-5 4 4 7-8' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/><path d='M16 8h4v4' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>",
        "Growth": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M6 14l4-4 3 3 5-6' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/><path d='M14 7h4v4' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>",
        "Brand": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M5 15.5V10a7 7 0 0 1 14 0v5.5' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'/><path d='M6 16h12v3H6z' fill='currentColor'/><path d='M8 8h8' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'/></svg>",
        "Top 10": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M9 7V5h6v2h-2v10h2v2H9v-2h2V7H9z' fill='currentColor'/><path d='M5 19h14' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'/></svg>",
        "Model": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M6 16h12v-3l-2-2H8l-2 2v3z' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'/><circle cx='8' cy='16' r='1.4' fill='currentColor'/><circle cx='16' cy='16' r='1.4' fill='currentColor'/></svg>",
        "Compare": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M7 6v12M7 6l-3 3M7 6l3 3M17 18V6M17 18l-3-3M17 18l3-3' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>",
        "Category": "<svg viewBox='0 0 24 24' aria-hidden='true'><rect x='4' y='4' width='6' height='6' rx='1' fill='currentColor'/><rect x='14' y='4' width='6' height='6' rx='1' fill='currentColor'/><rect x='4' y='14' width='6' height='6' rx='1' fill='currentColor'/><rect x='14' y='14' width='6' height='6' rx='1' fill='currentColor'/></svg>",
        "Forecast": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M4 18h16' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'/><path d='M6 15l4-4 3 3 5-6' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/><path d='M15 8h3v3' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>",
        "Insights": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M9 18h6M10 21h4' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'/><path d='M12 3a6 6 0 0 0-3.5 10.9c.8.6 1.5 1.6 1.8 2.6h3.4c.3-1 1-2 1.8-2.6A6 6 0 0 0 12 3z' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'/></svg>",
        "Auto": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M7 14h10l-1.2-3.5A2 2 0 0 0 14 9H10a2 2 0 0 0-1.8 1.5L7 14z' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'/><circle cx='9' cy='16.5' r='1.4' fill='currentColor'/><circle cx='15' cy='16.5' r='1.4' fill='currentColor'/></svg>",
        "Docs": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'/><path d='M14 3v5h5' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'/><path d='M9 11h6M9 15h6M9 19h4' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'/></svg>",
        "EV": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M13 2L5 13h6l-1 9 9-12h-6l0-8z' fill='currentColor'/></svg>",
    }

    icon_svg = icon_map.get(chip, "<svg viewBox='0 0 24 24' aria-hidden='true'><circle cx='12' cy='12' r='7' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>")

    st.markdown(
        f'''
<div style="display:flex; align-items:center; gap:0.75rem; margin:0.25rem 0 0.85rem 0;">
    <span title="{title}" aria-label="{chip}" style="display:inline-flex; align-items:center; justify-content:center; min-width:72px; height:36px; padding:0.38rem 0.75rem; border-radius:999px; background:linear-gradient(135deg, rgba(79,195,247,0.22), rgba(103,232,249,0.10)); border:1px solid rgba(79,195,247,0.24); color:#E0F2FE; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02);">{icon_svg}</span>
    <span style="font-size:1.5rem; font-weight:700; color:#F8FAFC; line-height:1.2;">{title}</span>
</div>
''',
        unsafe_allow_html=True,
    )


def calculate_cagr(start_value, end_value, periods):
    if periods <= 0 or start_value <= 0 or end_value <= 0:
        return np.nan
    return (end_value / start_value) ** (1 / periods) - 1


def classify_market_segment(category_name):
    name = str(category_name).lower()
    if any(keyword in name for keyword in ["luxury", "premium", "suv", "muv", "sports", "executive"]):
        return "Premium"
    if any(keyword in name for keyword in ["hatchback", "compact", "mini", "entry", "budget"]):
        return "Budget"
    return "Mainstream"


def revenue_weight_for_segment(segment_name):
    weights = {
        "Budget": 1.00,
        "Mainstream": 1.22,
        "Premium": 1.48,
        "EV": 1.55,
    }
    return weights.get(segment_name, 1.22)


def render_brand_origin_countries(conn):
    render_section_heading("Brand Origin Countries", "Origin")

    brand_country = pd.read_sql(
        """
SELECT brand_name, country
FROM brands
ORDER BY brand_name
""",
        conn
    )

    flag_urls = {
        "USA": "https://flagcdn.com/w40/us.png",
        "Japan": "https://flagcdn.com/w40/jp.png",
        "Italy": "https://flagcdn.com/w40/it.png",
        "South Korea": "https://flagcdn.com/w40/kr.png",
        "Germany": "https://flagcdn.com/w40/de.png",
        "France": "https://flagcdn.com/w40/fr.png",
        "India": "https://flagcdn.com/w40/in.png",
        "Czech Republic": "https://flagcdn.com/w40/cz.png",
        "UK/China": "https://flagcdn.com/w40/gb.png,https://flagcdn.com/w40/cn.png",
        "India/Japan": "https://flagcdn.com/w40/in.png,https://flagcdn.com/w40/jp.png"
    }
    brand_country["Flag"] = brand_country["country"].map(flag_urls)
    brand_country = brand_country.rename(columns={"brand_name": "Brand", "country": "Country of Origin"})
    brand_country = brand_country[["Flag", "Brand", "Country of Origin"]]

    image_renderer = JsCode(
        """
class ImgCellRenderer {
    init(params) {
        this.eGui = document.createElement('div');
        this.eGui.style.display = 'flex';
        this.eGui.style.alignItems = 'center';
        this.eGui.style.justifyContent = 'center';
        this.eGui.style.gap = '3px';

        const urls = params.value.split(',');

        urls.forEach(url => {
            const img = document.createElement('img');
            img.src = url.trim();
            img.style.width = '24px';
            img.style.height = '16px';
            img.style.borderRadius = '2px';
            this.eGui.appendChild(img);
        });
    }

    getGui() {
        return this.eGui;
    }
}
"""
    )

    grid_builder = GridOptionsBuilder.from_dataframe(brand_country)
    grid_builder.configure_column(
        "Flag",
        header_name="Flag",
        width=60,
        cellRenderer=image_renderer,
        cellStyle={"display": "flex", "justifyContent": "center", "alignItems": "center"}
    )
    grid_builder.configure_column("Brand", width=260)
    grid_builder.configure_column("Country of Origin", width=260)
    grid_builder.configure_default_column(sortable=True, filter=True, resizable=True)

    AgGrid(
        brand_country,
        gridOptions=grid_builder.build(),
        height=530,
        fit_columns_on_grid_load=True,
        allow_unsafe_jscode=True,
        theme="streamlit",
        custom_css={
            ".ag-root-wrapper": {"background-color": "#0E1117", "border": "2px solid #3b3b3b", "border-radius": "12px"},
            ".ag-root": {"background-color": "#0E1117"},
            ".ag-header": {"background-color": "#1b1b1b", "border-bottom": "1px solid #444"},
            ".ag-header-cell": {"font-weight": "bold", "font-size": "15px", "color": "white"},
            ".ag-cell": {"background-color": "#0E1117", "color": "white", "border-color": "#333"},
            ".ag-row": {"background-color": "#0E1117", "border-bottom": "1px solid #2c2c2c"},
            ".ag-row:hover": {"background-color": "#1f2937"},
            ".ag-center-cols-container": {"min-height": "0px !important"},
            ".ag-body": {"background-color": "#0E1117"},
            ".ag-body-viewport": {"background-color": "#0E1117"}
        }
    )


def render_executive_summary(conn):
    render_section_heading("Executive Summary", "Summary")

    market_leader = pd.read_sql(
        """
SELECT
    b.brand_name,
    SUM(s.units_sold) AS total_sales
FROM sales s
JOIN models m ON s.model_id = m.model_id
JOIN brands b ON m.brand_id = b.brand_id
GROUP BY b.brand_name
ORDER BY total_sales DESC
LIMIT 1
""",
        conn
    )

    best_model = pd.read_sql(
        """
SELECT
    m.model_name,
    SUM(s.units_sold) AS total_sales
FROM sales s
JOIN models m ON s.model_id = m.model_id
GROUP BY m.model_name
ORDER BY total_sales DESC
LIMIT 1
""",
        conn
    )

    peak_year = pd.read_sql(
        """
SELECT sales_year, SUM(units_sold) AS total_sales
FROM sales
GROUP BY sales_year
ORDER BY total_sales DESC
LIMIT 1
""",
        conn
    )

    lowest_year = pd.read_sql(
        """
SELECT sales_year, SUM(units_sold) AS total_sales
FROM sales
GROUP BY sales_year
ORDER BY total_sales ASC
LIMIT 1
""",
        conn
    )

    overall_sales = pd.read_sql(
        """
SELECT SUM(units_sold) AS total_sales
FROM sales
""",
        conn
    )

    c1, c2, c3 = st.columns(3)
    with c1:
        st.success(f"""
**Market Leader**

**{market_leader.iloc[0]['brand_name']}**

**{int(market_leader.iloc[0]['total_sales']):,} Units Sold**
""")
    with c2:
        st.info(f"""
**Best Selling Model**

**{best_model.iloc[0]['model_name']}**

**{int(best_model.iloc[0]['total_sales']):,} Units Sold**
""")
    with c3:
        st.warning(f"""
**Market Overview**

**Peak Year:** {int(peak_year.iloc[0]['sales_year'])}

**Lowest Year:** {int(lowest_year.iloc[0]['sales_year'])}

**Total Sales:** {int(overall_sales.iloc[0]['total_sales']):,}
""")

    st.caption("Executive Summary provides a quick overview of the Indian Passenger Vehicle Market (2016–2026).")


def render_home(conn):
    india_flag_data_uri = image_to_data_uri(APP_ICON_PATH)
    st.markdown(
        f"""
<div style="text-align:center; margin-top:5px; margin-bottom:10px;">
    <img src="{india_flag_data_uri}" width="75">
</div>
""",
        unsafe_allow_html=True
    )

    st.markdown(
        """
<h1 style="text-align:center; font-size:40px; font-weight:600; margin-top:0px; margin-bottom:30px;">
Indian Automobile Market Analytics (2016-2026)
</h1>
""",
        unsafe_allow_html=True
    )

    render_brand_logo_strip()
    render_brand_origin_countries(conn)

    st.markdown("### Indian Passenger Vechicle Market Analysis (2016-2026)")

    total_sales = pd.read_sql("""SELECT SUM(units_sold) AS total_sales FROM sales""", conn)
    total_brands = pd.read_sql("""SELECT COUNT(*) AS total_brands FROM brands""", conn)
    total_models = pd.read_sql("""SELECT COUNT(*) AS total_models FROM models""", conn)
    market_leader = pd.read_sql(
        """
SELECT b.brand_name, SUM(s.units_sold) AS total_sales
FROM sales s
JOIN models m ON s.model_id = m.model_id
JOIN brands b ON m.brand_id = b.brand_id
GROUP BY b.brand_name
ORDER BY total_sales DESC
LIMIT 1
""",
        conn
    )

    c1, c2, c3, c4 = st.columns(4)
    with c1:
        st.metric("Total Sales", f"{int(total_sales.iloc[0]['total_sales']):,}")
    with c2:
        st.metric("Total Brands", int(total_brands.iloc[0]['total_brands']))
    with c3:
        st.metric("Total Models", int(total_models.iloc[0]['total_models']))
    with c4:
        st.metric("Market Leader", market_leader.iloc[0]["brand_name"])

    render_executive_summary(conn)


def render_market_analysis(conn):
    st.markdown("### Indian Passenger Vechicle Market Analysis (2016-2026)")
    render_section_heading("Brand-wise Sales", "Sales")

    brand_sales = pd.read_sql(
        """
SELECT
    b.brand_name,
    SUM(s.units_sold) AS total_sales
FROM sales s
JOIN models m ON s.model_id = m.model_id
JOIN brands b ON m.brand_id = b.brand_id
GROUP BY b.brand_name
ORDER BY total_sales ASC
""",
        conn
    )

    fig = px.bar(brand_sales, x="brand_name", y="total_sales", color="total_sales", color_continuous_scale="Blues", text="total_sales")
    fig.update_traces(texttemplate="%{text:,}", textposition="outside", hovertemplate="<b>Brand:</b> %{x}<br><b>Units Sold:</b> %{y:,}<extra></extra>")
    fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", height=520, coloraxis_showscale=False, title=dict(text="Brand-wise Vehicle Sales", x=0, font=dict(size=22)), xaxis=dict(title="Brand", tickangle=-90), yaxis=dict(title="Units Sold", tickformat=",", range=[0, brand_sales["total_sales"].max() * 1.15]), margin=dict(l=20, r=20, t=60, b=20))
    st.plotly_chart(fig, use_container_width=True)

    highest_brand = brand_sales.iloc[-1]
    lowest_brand = brand_sales.iloc[0]
    st.success(f"**{highest_brand['brand_name']}** recorded the highest sales with **{int(highest_brand['total_sales']):,} units sold**.")
    st.info(f"**{lowest_brand['brand_name']}** recorded the lowest sales with **{int(lowest_brand['total_sales']):,} units sold**.")

    render_section_heading("Monthly Sales Trend", "Monthly")
    monthly_sales = pd.read_sql(
        """
SELECT sales_month, SUM(units_sold) AS total_sales
FROM sales
GROUP BY sales_month
ORDER BY sales_month
""",
        conn
    )
    monthly_sales["Month"] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    fig = px.line(monthly_sales, x="Month", y="total_sales", markers=True, title="Monthly Vehicle Sales Trend (2016–2026)")
    fig.update_traces(line=dict(shape="spline", smoothing=0.4, width=4, color="#00CC96"), marker=dict(size=8, color="#00CC96"), hovertemplate="<b>Month:</b> %{x}<br><b>Units Sold:</b> %{y:,}<extra></extra>")
    fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", height=500, title=dict(text="Monthly Vehicle Sales Trend", x=0, font=dict(size=22)), xaxis_title="Month", yaxis_title="Units Sold", yaxis=dict(tickformat=","), hovermode="x unified", margin=dict(l=20, r=20, t=60, b=20))
    st.plotly_chart(fig, use_container_width=True)
    highest_month = monthly_sales.loc[monthly_sales["total_sales"].idxmax()]
    lowest_month = monthly_sales.loc[monthly_sales["total_sales"].idxmin()]
    st.success(f"Highest average sales were recorded in **{highest_month['Month']}** with **{int(highest_month['total_sales']):,} units sold**.")
    st.info(f"Lowest average sales were recorded in **{lowest_month['Month']}** with **{int(lowest_month['total_sales']):,} units sold**.")

    render_section_heading("Sales Trend Analysis", "Trend")
    sales_trend = pd.read_sql(
        """
SELECT sales_year, SUM(units_sold) AS total_sales
FROM sales
GROUP BY sales_year
ORDER BY sales_year
""",
        conn
    )
    fig = px.line(sales_trend, x="sales_year", y="total_sales", markers=True, title="Year-wise Vehicle Sales Trend")
    fig.update_traces(line=dict(shape="spline", smoothing=0.4, width=4, color="#73B6F0"), marker=dict(size=9, color="#73B6F0"), hovertemplate="<b>Year:</b> %{x}<br><b>Units Sold:</b> %{y:,}<extra></extra>")
    fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", height=520, title=dict(text="Year-wise Vehicle Sales Trend", x=0, font=dict(size=22)), xaxis=dict(title="Year", tickmode="linear"), yaxis=dict(title="Units Sold", tickformat=","), hovermode="x unified", margin=dict(l=20, r=20, t=60, b=20))
    st.plotly_chart(fig, use_container_width=True)
    highest = sales_trend.loc[sales_trend["total_sales"].idxmax()]
    lowest = sales_trend.loc[sales_trend["total_sales"].idxmin()]
    st.success(f"Peak sales were recorded in **{int(highest['sales_year'])}** with **{int(highest['total_sales']):,} units sold**.")
    st.info(f"Lowest sales were recorded in **{int(lowest['sales_year'])}** with **{int(lowest['total_sales']):,} units sold**.")
    st.caption("If the latest year's sales appear lower, it may be because only partial monthly data is available.")
    st.info("""
**Market Insight**

The Indian automobile market experienced a significant decline in 2020, with total sales dropping by approximately **24%** compared to 2019. This decrease aligns with the impact of the COVID-19 pandemic, which affected manufacturing, supply chains, dealership operations, and consumer demand. Sales recovered strongly in 2021 as market conditions improved.
""")

    render_section_heading("Year-over-Year Sales Growth", "Growth")
    yoy = pd.read_sql(
        """
SELECT sales_year, SUM(units_sold) AS total_sales
FROM sales
WHERE sales_year < 2026
GROUP BY sales_year
ORDER BY sales_year
""",
        conn
    )
    yoy["Growth (%)"] = yoy["total_sales"].pct_change() * 100
    fig = px.line(yoy, x="sales_year", y="Growth (%)", markers=True)
    fig.update_traces(line=dict(width=4), marker=dict(size=10), hovertemplate="<b>%{x}</b><br>Growth: %{y:.2f}%<extra></extra>")
    fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", height=450, xaxis_title="Year", yaxis_title="Growth (%)", yaxis_ticksuffix="%", margin=dict(l=20, r=20, t=30, b=20))
    st.plotly_chart(fig, use_container_width=True)
    best = yoy.loc[yoy["Growth (%)"].idxmax()]
    worst = yoy.loc[yoy["Growth (%)"].idxmin()]
    c1, c2 = st.columns(2)
    with c1:
        st.success(f"Highest YoY Growth: **{int(best['sales_year'])}** ({best['Growth (%)']:.2f}%)")
    with c2:
        st.error(f"Lowest YoY Growth: **{int(worst['sales_year'])}** ({worst['Growth (%)']:.2f}%)")
    display = yoy.copy()
    display["Growth (%)"] = display["Growth (%)"].apply(lambda value: "-" if pd.isna(value) else f"{value:.2f}%")
    display["total_sales"] = display["total_sales"].apply(lambda value: f"{int(value):,}")
    display.columns = ["Year", "Units Sold", "Growth (%)"]
    st.dataframe(display, use_container_width=True, hide_index=True)


def render_brand_analysis(conn):
    render_section_heading("Brand Performance Analysis", "Brand")
    brands = pd.read_sql("""SELECT brand_name FROM brands ORDER BY brand_name""", conn)
    selected_brand = st.selectbox("Select a Brand", brands["brand_name"])
    brand_trend = pd.read_sql(
        """
SELECT s.sales_year, SUM(s.units_sold) AS total_sales
FROM sales s
JOIN models m ON s.model_id = m.model_id
JOIN brands b ON m.brand_id = b.brand_id
WHERE b.brand_name = %s
GROUP BY s.sales_year
ORDER BY s.sales_year
""",
        conn,
        params=(selected_brand,)
    )

    total_brand_sales = int(brand_trend["total_sales"].sum())
    highest = brand_trend.loc[brand_trend["total_sales"].idxmax()]
    lowest = brand_trend.loc[brand_trend["total_sales"].idxmin()]
    average_sales = int(brand_trend["total_sales"].mean())
    growth = ((highest["total_sales"] - lowest["total_sales"]) / lowest["total_sales"]) * 100

    c1, c2, c3, c4, c5 = st.columns(5)
    with c1: st.metric("Total Sales", f"{total_brand_sales:,}")
    with c2: st.metric("Peak Year", int(highest["sales_year"]))
    with c3: st.metric("Peak Sales", f"{int(highest['total_sales']):,}")
    with c4: st.metric("Average Sales", f"{average_sales:,}")
    with c5: st.metric("Growth", f"{growth:.1f}%")

    col1, col2 = st.columns(2)
    line_fig = px.line(brand_trend, x="sales_year", y="total_sales", markers=True, title=f"{selected_brand} Sales Trend")
    line_fig.update_traces(line=dict(width=4, shape="spline", smoothing=0.4, color="#4FC3F7"), marker=dict(size=9, color="#4FC3F7"), hovertemplate="<b>Year:</b> %{x}<br><b>Units Sold:</b> %{y:,}<extra></extra>")
    line_fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", height=500, title_x=0, xaxis_title="Year", yaxis_title="Units Sold", yaxis=dict(tickformat=","), hovermode="x unified")
    bar_fig = px.bar(brand_trend, x="sales_year", y="total_sales", title=f"{selected_brand} Sales by Year", text="total_sales")
    bar_fig.update_traces(marker_color="#00CC96", texttemplate="%{text:,}", textposition="outside", hovertemplate="<b>Year:</b> %{x}<br><b>Units Sold:</b> %{y:,}<extra></extra>")
    bar_fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", height=500, title_x=0, xaxis_title="Year", yaxis_title="Units Sold", yaxis=dict(tickformat=","))
    with col1: st.plotly_chart(line_fig, use_container_width=True)
    with col2: st.plotly_chart(bar_fig, use_container_width=True)
    st.success(f"{selected_brand} achieved its highest annual sales in **{int(highest['sales_year'])}** with **{int(highest['total_sales']):,} units sold**.")
    st.info(f"The lowest annual sales were recorded in **{int(lowest['sales_year'])}** with **{int(lowest['total_sales']):,} units sold**.")
    st.caption("If 2026 appears lower than previous years, it represents partial-year sales data.")


def render_model_analysis(conn):
    render_section_heading("Top 10 Models", "Top 10")
    top_models = pd.read_sql(
        """
SELECT m.model_name, SUM(s.units_sold) AS total_sales
FROM sales s
JOIN models m ON s.model_id = m.model_id
GROUP BY m.model_name
ORDER BY total_sales DESC
LIMIT 10
""",
        conn
    )

    left, right = st.columns([1, 1])
    with left:
        st.dataframe(top_models.rename(columns={"model_name": "Model", "total_sales": "Units Sold"}), use_container_width=True, hide_index=True, height=420)
    with right:
        fig = px.bar(top_models.sort_values("total_sales"), x="total_sales", y="model_name", orientation="h", color="total_sales", color_continuous_scale="Blues", text="total_sales")
        fig.update_traces(texttemplate="%{text:,}", textposition="outside", cliponaxis=False)
        fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", coloraxis_showscale=False, height=420, margin=dict(l=10, r=90, t=10, b=10), xaxis_title="Units Sold", yaxis_title="", xaxis=dict(range=[0, top_models["total_sales"].max() * 1.28]))
        st.plotly_chart(fig, use_container_width=True)

    render_section_heading("Model Performance Analysis", "Model")
    models = pd.read_sql("""SELECT model_name FROM models ORDER BY model_name""", conn)
    selected_model = st.selectbox("Select Model", models["model_name"])

    model_info = pd.read_sql(
        """
SELECT b.brand_name, c.category_name
FROM models m
JOIN brands b ON m.brand_id=b.brand_id
JOIN categories c ON m.category_id=c.category_id
WHERE m.model_name=%s
""",
        conn,
        params=(selected_model,)
    )

    model_sales = pd.read_sql(
        """
SELECT s.sales_year, SUM(s.units_sold) AS total_sales
FROM sales s
JOIN models m ON s.model_id=m.model_id
WHERE m.model_name=%s
GROUP BY s.sales_year
ORDER BY s.sales_year
""",
        conn,
        params=(selected_model,)
    )

    info1, info2 = st.columns(2)
    with info1: st.info(f"**Brand :** {model_info.iloc[0]['brand_name']}")
    with info2: st.info(f"**Category :** {model_info.iloc[0]['category_name']}")

    highest = model_sales.loc[model_sales["total_sales"].idxmax()]
    lowest = model_sales.loc[model_sales["total_sales"].idxmin()]
    total_sales = int(model_sales["total_sales"].sum())
    average_sales = int(model_sales["total_sales"].mean())
    growth = ((highest["total_sales"] - lowest["total_sales"]) / lowest["total_sales"]) * 100

    c1, c2, c3, c4, c5 = st.columns(5)
    with c1: st.metric("Total Sales", f"{total_sales:,}")
    with c2: st.metric("Peak Year", int(highest["sales_year"]))
    with c3: st.metric("Peak Sales", f"{int(highest['total_sales']):,}")
    with c4: st.metric("Average Sales", f"{average_sales:,}")
    with c5: st.metric("Growth", f"{growth:.1f}%")

    left, right = st.columns(2)
    line_fig = px.line(model_sales, x="sales_year", y="total_sales", markers=True, title=f"{selected_model} Sales Trend")
    line_fig.update_traces(line=dict(width=4, shape="spline", smoothing=0.4, color="#4FC3F7"), marker=dict(size=9, color="#4FC3F7"), hovertemplate="<b>Year:</b> %{x}<br><b>Units Sold:</b> %{y:,}<extra></extra>")
    line_fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", height=500, title_x=0, xaxis_title="Year", yaxis_title="Units Sold", yaxis=dict(tickformat=","), hovermode="x unified")
    bar_fig = px.bar(model_sales, x="sales_year", y="total_sales", text="total_sales", title=f"{selected_model} Sales by Year", color="total_sales", color_continuous_scale="Blues")
    bar_fig.update_traces(texttemplate="%{text:,}", textposition="outside", hovertemplate="<b>Year:</b> %{x}<br><b>Units Sold:</b> %{y:,}<extra></extra>")
    bar_fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", height=500, title_x=0, coloraxis_showscale=False, xaxis_title="Year", yaxis_title="Units Sold", yaxis=dict(tickformat=",", range=[0, model_sales["total_sales"].max() * 1.20]), margin=dict(l=20, r=80, t=50, b=20))
    with left: st.plotly_chart(line_fig, use_container_width=True)
    with right: st.plotly_chart(bar_fig, use_container_width=True)

    partial_note = ""
    if model_sales["sales_year"].max() == 2026:
        partial_note = "Note: Sales for 2026 represent partial-year data and should not be directly compared with previous full years."

    st.success(f"""
**Highest Performance**

**{selected_model}** recorded its highest annual sales in **{int(highest['sales_year'])}** with **{int(highest['total_sales']):,} units sold**.
""")
    st.info(f"""
**Lowest Performance**

The lowest annual sales were recorded in **{int(lowest['sales_year'])}** with **{int(lowest['total_sales']):,} units sold**.
""")
    if highest["sales_year"] > lowest["sales_year"]:
        st.success(f"Overall, **{selected_model}** has shown a positive sales trend over the analysis period.")
    else:
        st.warning(f"**{selected_model}** has experienced fluctuations in yearly sales.")
    if partial_note:
        st.caption(partial_note)

    growth_table = model_sales.copy()
    growth_calc = growth_table[growth_table["sales_year"] < 2026].copy()
    growth_calc["growth_pct"] = growth_calc["total_sales"].pct_change() * 100
    growth_table = growth_table.merge(growth_calc[["sales_year", "growth_pct"]], on="sales_year", how="left")

    display = growth_table.copy()
    display["total_sales"] = display["total_sales"].apply(lambda value: f"{int(value):,}")
    display["growth_pct"] = display["growth_pct"].apply(lambda value: "-" if pd.isna(value) else f"{value:.2f}%")
    display.columns = ["Year", "Units Sold", "YoY Growth (%)"]
    st.markdown("### Year-wise Model Statistics")
    st.dataframe(display, use_container_width=True, hide_index=True)

    render_section_heading("Compare Vehicle Models", "Compare")
    compare_models = st.multiselect("Select Models to Compare", options=models["model_name"].tolist(), default=models["model_name"].tolist()[:3])
    if len(compare_models) >= 2:
        comparison = pd.read_sql(
            """
    SELECT
        s.sales_year,
        m.model_name,
        SUM(s.units_sold) AS total_sales
    FROM sales s
    JOIN models m ON s.model_id = m.model_id
    WHERE m.model_name = ANY(%s)
    GROUP BY s.sales_year, m.model_name
    ORDER BY s.sales_year, m.model_name
    """,
            conn,
            params=(compare_models,)
        )
        fig = px.line(comparison, x="sales_year", y="total_sales", color="model_name", markers=True, title="Model Comparison Over Time")
        fig.update_traces(line=dict(width=3))
        fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", height=600, xaxis_title="Year", yaxis_title="Units Sold", yaxis=dict(tickformat=","), hovermode="x unified", legend_title="Model")
        st.plotly_chart(fig, use_container_width=True)
        summary = comparison.groupby("model_name").agg(Total_Sales=("total_sales", "sum"), Average_Sales=("total_sales", "mean"), Peak_Sales=("total_sales", "max")).reset_index()
        summary["Average_Sales"] = summary["Average_Sales"].round().astype(int)
        st.markdown("### Comparison Summary")
        st.dataframe(summary, use_container_width=True, hide_index=True)
    else:
        st.info("Please select at least 2 models for comparison.")


def render_category_analysis(conn):
    render_section_heading("Category Performance Analysis", "Category")
    category_sales = pd.read_sql(
        """
SELECT c.category_name, SUM(s.units_sold) AS total_sales
FROM sales s
JOIN models m ON s.model_id = m.model_id
JOIN categories c ON m.category_id = c.category_id
GROUP BY c.category_name
ORDER BY total_sales DESC
""",
        conn
    )
    total_sales = category_sales["total_sales"].sum()
    category_sales["market_share"] = (category_sales["total_sales"] / total_sales * 100).round(2)
    top_category = category_sales.iloc[0]
    lowest_category = category_sales.iloc[-1]
    average_sales = int(category_sales["total_sales"].mean())

    c1, c2, c3, c4 = st.columns(4)
    with c1: st.metric("Total Categories", len(category_sales))
    with c2: st.metric("Top Category", top_category["category_name"])
    with c3: st.metric("Highest Sales", f"{int(top_category['total_sales']):,}")
    with c4: st.metric("Average Sales", f"{average_sales:,}")

    left, right = st.columns(2)
    bar_fig = px.bar(category_sales, x="total_sales", y="category_name", orientation="h", text="total_sales", color="total_sales", color_continuous_scale="Blues", title="Category-wise Vehicle Sales")
    bar_fig.update_traces(texttemplate="%{text:,}", textposition="outside", textfont=dict(size=10), cliponaxis=False)
    bar_fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", height=460, xaxis_title="Units Sold", yaxis_title="Vehicle Category", yaxis=dict(categoryorder="total ascending"), coloraxis_showscale=False, xaxis=dict(tickformat=",", range=[0, category_sales["total_sales"].max() * 1.30]), margin=dict(l=20, r=130, t=50, b=20))
    pie_fig = px.pie(category_sales, names="category_name", values="total_sales", hole=0.60, color="category_name")
    pie_fig.update_traces(textinfo="label+percent", textposition="inside", marker=dict(line=dict(color="#111111", width=2)))
    pie_fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", height=520, title="Category Market Share", title_x=0, legend_title="Category")
    with left: st.plotly_chart(bar_fig, use_container_width=True)
    with right: st.plotly_chart(pie_fig, use_container_width=True)

    st.success(f"""
**{top_category['category_name']}** dominates the Indian automobile market
with **{top_category['market_share']}%** market share
({int(top_category['total_sales']):,} units sold).
""")
    st.info(f"""
**{lowest_category['category_name']}** recorded the lowest contribution
with **{int(lowest_category['total_sales']):,} units sold**
({lowest_category['market_share']}% market share).
""")
    st.markdown("### Category Statistics")
    display = category_sales.copy()
    display["total_sales"] = display["total_sales"].apply(lambda value: f"{int(value):,}")
    display["market_share"] = display["market_share"].apply(lambda value: f"{value:.2f}%")
    display.columns = ["Category", "Units Sold", "Market Share"]
    st.dataframe(display, use_container_width=True, hide_index=True)
    st.caption("Category market share is calculated based on the total passenger vehicle sales recorded between 2016 and 2026.")


def render_predictive_analytics(conn):
    render_section_heading("Sales Forecast (2027–2029)", "Forecast")
    forecast_df = pd.read_sql(
        """
SELECT sales_year, SUM(units_sold) AS total_sales
FROM sales
WHERE sales_year < 2026
GROUP BY sales_year
ORDER BY sales_year
""",
        conn
    )
    model = LinearRegression()
    model.fit(forecast_df[["sales_year"]], forecast_df["total_sales"])
    future_years = np.array([[2027], [2028], [2029]])
    future_sales = model.predict(future_years)

    forecast = pd.DataFrame({"sales_year": [2027, 2028, 2029], "total_sales": future_sales})
    history = forecast_df.copy(); history["Type"] = "Historical"
    forecast["Type"] = "Forecast"
    combined = pd.concat([history, forecast], ignore_index=True)

    fig = px.line(combined, x="sales_year", y="total_sales", color="Type", markers=True, title="Historical Sales vs Forecast")
    fig.update_traces(line=dict(width=4), marker=dict(size=10))
    fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", height=500, xaxis_title="Year", yaxis_title="Units Sold", legend_title="Data", margin=dict(l=20, r=20, t=50, b=20))
    st.plotly_chart(fig, use_container_width=True)

    st.markdown("### Predicted Sales")
    c1, c2, c3 = st.columns(3)
    with c1: st.metric("2027", f"{int(forecast.iloc[0]['total_sales']):,}")
    with c2: st.metric("2028", f"{int(forecast.iloc[1]['total_sales']):,}")
    with c3: st.metric("2029", f"{int(forecast.iloc[2]['total_sales']):,}")

    st.markdown("### Forecast Values")
    forecast_display = forecast.copy(); forecast_display.columns = ["Year", "Predicted Sales", "Type"]
    forecast_display["Predicted Sales"] = forecast_display["Predicted Sales"].astype(int)
    st.dataframe(forecast_display[["Year", "Predicted Sales"]], use_container_width=True, hide_index=True)

    growth = ((forecast.iloc[-1]["total_sales"] - forecast.iloc[0]["total_sales"]) / forecast.iloc[0]["total_sales"]) * 100
    st.success(f"Based on historical trends (2016–2025), annual vehicle sales are forecast to grow by approximately **{growth:.2f}%** between **2027** and **2029**.")


def render_business_insights(conn):
    render_section_heading("Business Insights", "Insights")

    historical_sales = pd.read_sql(
        """
SELECT sales_year, SUM(units_sold) AS total_sales
FROM sales
WHERE sales_year < 2026
GROUP BY sales_year
ORDER BY sales_year
""",
        conn,
    )

    brand_year_sales = pd.read_sql(
        """
SELECT b.brand_name, s.sales_year, SUM(s.units_sold) AS total_sales
FROM sales s
JOIN models m ON s.model_id = m.model_id
JOIN brands b ON m.brand_id = b.brand_id
WHERE s.sales_year < 2026
GROUP BY b.brand_name, s.sales_year
ORDER BY b.brand_name, s.sales_year
""",
        conn,
    )

    category_year_sales = pd.read_sql(
        """
SELECT c.category_name, s.sales_year, SUM(s.units_sold) AS total_sales
FROM sales s
JOIN models m ON s.model_id = m.model_id
JOIN categories c ON m.category_id = c.category_id
WHERE s.sales_year < 2026
GROUP BY c.category_name, s.sales_year
ORDER BY c.category_name, s.sales_year
""",
        conn,
    )

    monthly_sales = pd.read_sql(
        """
SELECT sales_month, SUM(units_sold) AS total_sales
FROM sales
GROUP BY sales_month
ORDER BY sales_month
""",
        conn,
    )

    product_sales = pd.read_sql(
        """
SELECT
    b.brand_name,
    c.category_name,
    s.sales_year,
    SUM(s.units_sold) AS total_sales
FROM sales s
JOIN models m ON s.model_id = m.model_id
JOIN brands b ON m.brand_id = b.brand_id
JOIN categories c ON m.category_id = c.category_id
WHERE s.sales_year < 2026
GROUP BY b.brand_name, c.category_name, s.sales_year
ORDER BY b.brand_name, c.category_name, s.sales_year
""",
        conn,
    )

    ev_sales = pd.read_sql(
        """
SELECT s.sales_year, SUM(s.units_sold) AS total_sales
FROM sales s
JOIN models m ON s.model_id = m.model_id
JOIN categories c ON m.category_id = c.category_id
WHERE s.sales_year < 2026
  AND (
        LOWER(m.model_name) LIKE '%ev%'
        OR LOWER(m.model_name) LIKE '%electric%'
        OR LOWER(c.category_name) LIKE '%ev%'
        OR LOWER(c.category_name) LIKE '%electric%'
      )
GROUP BY s.sales_year
ORDER BY s.sales_year
""",
        conn,
    )

    if historical_sales.empty:
        st.warning("Insufficient historical data is available to build the business insights dashboard.")
        return

    historical_sales["Growth (%)"] = historical_sales["total_sales"].pct_change() * 100
    first_year = int(historical_sales.iloc[0]["sales_year"])
    last_year = int(historical_sales.iloc[-1]["sales_year"])
    total_periods = last_year - first_year
    market_cagr = calculate_cagr(
        float(historical_sales.iloc[0]["total_sales"]),
        float(historical_sales.iloc[-1]["total_sales"]),
        total_periods,
    )
    growth_volatility = historical_sales["Growth (%)"].dropna().std()
    best_growth_year = historical_sales.loc[historical_sales["Growth (%)"].idxmax()]
    worst_growth_year = historical_sales.loc[historical_sales["Growth (%)"].idxmin()]

    brand_pivot = brand_year_sales.pivot(index="brand_name", columns="sales_year", values="total_sales").fillna(0)
    brand_cagr = []
    for brand_name, row in brand_pivot.iterrows():
        start_value = float(row.get(first_year, 0))
        end_value = float(row.get(last_year, 0))
        cagr_value = calculate_cagr(start_value, end_value, total_periods)
        total_units = float(row.sum())
        if pd.notna(cagr_value):
            brand_cagr.append({"Brand": brand_name, "CAGR (%)": cagr_value * 100, "Total Units": total_units})
    brand_cagr_df = pd.DataFrame(brand_cagr).sort_values("CAGR (%)", ascending=False)

    if brand_cagr_df.empty:
        st.warning("Brand growth analysis could not be computed from the available data.")
        return

    fastest_brand = brand_cagr_df.iloc[0]
    declining_brand = brand_cagr_df.iloc[-1]

    revenue_mix = product_sales.copy()
    revenue_mix["Segment"] = revenue_mix["category_name"].apply(classify_market_segment)
    revenue_mix["Revenue Index"] = revenue_mix.apply(
        lambda row: row["total_sales"] * revenue_weight_for_segment(row["Segment"]),
        axis=1,
    )

    brand_revenue = revenue_mix.groupby("brand_name", as_index=False).agg(
        Units_Sold=("total_sales", "sum"),
        Revenue_Index=("Revenue Index", "sum"),
    ).sort_values("Revenue_Index", ascending=False)
    category_performance = revenue_mix.groupby("category_name", as_index=False).agg(
        Units_Sold=("total_sales", "sum"),
        Revenue_Index=("Revenue Index", "sum"),
    ).sort_values("Revenue_Index", ascending=False)
    highest_revenue_brand = brand_revenue.iloc[0]
    best_category = category_performance.iloc[0]

    brand_share = brand_year_sales.groupby("brand_name", as_index=False)["total_sales"].sum()
    brand_share["Market Share (%)"] = (brand_share["total_sales"] / brand_share["total_sales"].sum() * 100)
    market_concentration = (brand_share["Market Share (%)"] ** 2).sum()
    top_5_share = brand_share.nlargest(5, "total_sales")["total_sales"].sum() / brand_share["total_sales"].sum() * 100

    month_order = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    monthly_sales["Month"] = month_order
    monthly_sales["Share (%)"] = (monthly_sales["total_sales"] / monthly_sales["total_sales"].sum() * 100).round(2)
    quarter_map = {
        "Jan": "Q1", "Feb": "Q1", "Mar": "Q1",
        "Apr": "Q2", "May": "Q2", "Jun": "Q2",
        "Jul": "Q3", "Aug": "Q3", "Sep": "Q3",
        "Oct": "Q4", "Nov": "Q4", "Dec": "Q4",
    }
    monthly_sales["Quarter"] = monthly_sales["Month"].map(quarter_map)
    quarter_sales = monthly_sales.groupby("Quarter", as_index=False)["total_sales"].sum().sort_values("total_sales", ascending=False)
    peak_quarter = quarter_sales.iloc[0]
    trough_quarter = quarter_sales.iloc[-1]
    seasonality_ratio = float(peak_quarter["total_sales"]) / float(trough_quarter["total_sales"]) if float(trough_quarter["total_sales"]) > 0 else np.nan

    ev_growth = np.nan
    ev_share_change = np.nan
    if not ev_sales.empty:
        ev_start = float(ev_sales.iloc[0]["total_sales"])
        ev_end = float(ev_sales.iloc[-1]["total_sales"])
        ev_growth = calculate_cagr(ev_start, ev_end, int(ev_sales.iloc[-1]["sales_year"]) - int(ev_sales.iloc[0]["sales_year"])) * 100
        ev_share = ev_sales.merge(historical_sales[["sales_year", "total_sales"]], on="sales_year", suffixes=("_ev", "_market"))
        ev_share["Share (%)"] = ev_share["total_sales_ev"] / ev_share["total_sales_market"] * 100
        ev_share_change = float(ev_share.iloc[-1]["Share (%)"] - ev_share.iloc[0]["Share (%)"])

    segment_sales = category_year_sales.copy()
    segment_sales["Segment"] = segment_sales["category_name"].apply(classify_market_segment)
    segment_yearly = segment_sales.groupby(["sales_year", "Segment"], as_index=False)["total_sales"].sum()
    segment_pivot = segment_yearly.pivot(index="sales_year", columns="Segment", values="total_sales").fillna(0)
    segment_cagr = {}
    for segment_name in segment_pivot.columns:
        segment_series = segment_pivot[segment_name]
        segment_cagr[segment_name] = calculate_cagr(float(segment_series.iloc[0]), float(segment_series.iloc[-1]), total_periods) * 100

    premium_share_change = np.nan
    budget_share_change = np.nan
    segment_share = segment_yearly.merge(historical_sales[["sales_year", "total_sales"]], on="sales_year", suffixes=("_segment", "_market"))
    segment_share["Share (%)"] = segment_share["total_sales_segment"] / segment_share["total_sales_market"] * 100
    if not segment_share.empty:
        premium_slice = segment_share[segment_share["Segment"] == "Premium"]
        budget_slice = segment_share[segment_share["Segment"] == "Budget"]
        if not premium_slice.empty:
            premium_share_change = float(premium_slice.iloc[-1]["Share (%)"] - premium_slice.iloc[0]["Share (%)"])
        if not budget_slice.empty:
            budget_share_change = float(budget_slice.iloc[-1]["Share (%)"] - budget_slice.iloc[0]["Share (%)"])

    c1, c2, c3, c4 = st.columns(4)
    with c1:
        st.metric("Market CAGR", f"{market_cagr * 100:.1f}%", delta=f"{best_growth_year['Growth (%)']:.1f}% best year")
    with c2:
        st.metric("Market HHI", f"{market_concentration:.0f}", delta=f"Top 5 brands {top_5_share:.1f}% share")
    with c3:
        st.metric("Fastest Brand", fastest_brand["Brand"], delta=f"{fastest_brand['CAGR (%)']:.1f}% CAGR")
    with c4:
        st.metric("Declining Brand", declining_brand["Brand"], delta=f"{declining_brand['CAGR (%)']:.1f}% CAGR", delta_color="inverse")

    c5, c6, c7, c8 = st.columns(4)
    with c5:
        st.metric("Highest Revenue Brand", highest_revenue_brand["brand_name"], delta=f"Index {highest_revenue_brand['Revenue_Index']:.0f}")
    with c6:
        st.metric("Best Category", best_category["category_name"], delta=f"Index {best_category['Revenue_Index']:.0f}")
    with c7:
        ev_label = "N/A" if pd.isna(ev_growth) else f"{ev_growth:.1f}%"
        st.metric("EV Adoption Growth", ev_label, delta=f"{ev_share_change:.1f} pp" if pd.notna(ev_share_change) else None)
    with c8:
        st.metric("Seasonality Ratio", f"{seasonality_ratio:.2f}x", delta=f"{peak_quarter['Quarter']} vs {trough_quarter['Quarter']}")

    st.caption("Revenue is presented as an estimated index because the dataset does not expose direct price or invoice fields.")

    render_section_heading("Growth and Structure", "Core")
    left, right = st.columns([1.15, 0.85])
    with left:
        trend_fig = px.line(
            historical_sales,
            x="sales_year",
            y="total_sales",
            markers=True,
            title="Core Market Trend"
        )
        trend_fig.update_traces(line=dict(width=4, color="#4FC3F7"), marker=dict(size=8, color="#4FC3F7"), hovertemplate="<b>Year:</b> %{x}<br><b>Units Sold:</b> %{y:,}<extra></extra>")
        trend_fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", height=360, xaxis_title="Year", yaxis_title="Units Sold", yaxis=dict(tickformat=","), margin=dict(l=10, r=10, t=50, b=10))
        st.plotly_chart(trend_fig, use_container_width=True)
    with right:
        concentration_df = brand_share.sort_values("Market Share (%)", ascending=False).head(8)
        conc_fig = px.bar(concentration_df, x="Market Share (%)", y="brand_name", orientation="h", text="Market Share (%)", title="Brand Concentration")
        conc_fig.update_traces(texttemplate="%{text:.1f}%", textposition="outside", marker_color="#00CC96")
        conc_fig.update_layout(template="plotly_dark", paper_bgcolor="#0E1117", plot_bgcolor="#0E1117", height=360, xaxis_title="Share (%)", yaxis_title="", margin=dict(l=10, r=10, t=50, b=10))
        st.plotly_chart(conc_fig, use_container_width=True)

    st.markdown("### Brand Momentum")
    st.dataframe(
        brand_cagr_df.head(8).rename(columns={"Brand": "Brand", "CAGR (%)": "CAGR (%)", "Total Units": "Total Units"}).assign(
            **{"CAGR (%)": lambda frame: frame["CAGR (%)"].map(lambda value: f"{value:.1f}%"), "Total Units": lambda frame: frame["Total Units"].map(lambda value: f"{int(value):,}")}
        ),
        use_container_width=True,
        hide_index=True,
    )

    st.markdown("### Premium vs Budget")
    seg_cols = st.columns(3)
    with seg_cols[0]:
        st.info(f"**Premium** segment CAGR: **{segment_cagr.get('Premium', np.nan):.1f}%**\n\nShare change: **{premium_share_change:.1f} pp**" if pd.notna(premium_share_change) else f"**Premium** segment CAGR: **{segment_cagr.get('Premium', np.nan):.1f}%**")
    with seg_cols[1]:
        st.info(f"**Budget** segment CAGR: **{segment_cagr.get('Budget', np.nan):.1f}%**\n\nShare change: **{budget_share_change:.1f} pp**" if pd.notna(budget_share_change) else f"**Budget** segment CAGR: **{segment_cagr.get('Budget', np.nan):.1f}%**")
    with seg_cols[2]:
        st.info(f"**Mainstream** segment CAGR: **{segment_cagr.get('Mainstream', np.nan):.1f}%**")

    st.markdown("### Seasonal Demand and EV Adoption")
    season_cols = st.columns(2)
    with season_cols[0]:
        season_df = monthly_sales.copy()
        season_df = season_df.set_index("Month").loc[["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]].reset_index()

        season_df["Share (%)"] = season_df["Share (%)"].map(lambda value: f"{value:.2f}%")

        season_df = season_df[["Month", "total_sales", "Share (%)", "Quarter"]]
        season_df.columns = ["Month", "Units Sold", "Share (%)", "Quarter"]
        st.dataframe(season_df, use_container_width=True, hide_index=True)
    with season_cols[1]:
        st.info(
            "EV adoption analysis has been moved to the dedicated EV Analysis section."
        )

    render_section_heading("Executive Recommendations", "Action")
    recommendations = []
    if pd.notna(market_cagr) and market_cagr > 0:
        recommendations.append("Scale investment in the fastest-growing brands and protect the premium segment, which is contributing more revenue index per unit sold.")
    if pd.notna(ev_growth) and ev_growth > 0:
        recommendations.append("Accelerate EV retail partnerships, charging access, and financing packages while EV adoption remains in a growth phase.")
    if pd.notna(market_concentration) and market_concentration > 1500:
        recommendations.append("Defend share in the top five brands because market concentration remains high and competitor gains will be visible quickly.")
    if pd.notna(seasonality_ratio) and seasonality_ratio > 1.15:
        recommendations.append("Front-load inventory and marketing for the peak quarter, then trim working capital exposure in the weakest quarter.")
    if pd.notna(premium_share_change) and pd.notna(budget_share_change) and premium_share_change > abs(budget_share_change):
        recommendations.append("Prioritize premium trims, higher-margin accessories, and feature-rich variants as the market mix shifts upward.")
    if not recommendations:
        recommendations.append("Maintain a balanced portfolio, monitor category mix monthly, and use brand concentration metrics to anticipate share shifts.")

    for recommendation in recommendations[:5]:
        st.markdown(
            f'''
<div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(148,163,184,0.10); border-radius: 16px; padding: 0.95rem 1rem; margin-bottom: 0.7rem; color: #E2E8F0;">
    {recommendation}
</div>
''',
            unsafe_allow_html=True,
        )

    st.caption("This section is intentionally distinct from the product, brand, category, and trend sections above. It focuses on derived leadership, concentration, segment mix, EV adoption, and strategic actions.")

def render_section_anchor(anchor_id):
    st.markdown(
        f'<div id="{anchor_id}" class="spa-section-anchor"></div>',
        unsafe_allow_html=True,
    )
def inject_smooth_scroll_script():
    components.html(
        """
<script>
(function () {
    function bindLinks() {
        try {
            const parentDoc = window.parent.document;
            const links = parentDoc.querySelectorAll('a[data-scroll-target]');

            links.forEach((link) => {
                if (link.dataset.scrollBound === 'true') {
                    return;
                }

                link.dataset.scrollBound = 'true';
                link.addEventListener('click', function (event) {
                    const targetId = link.getAttribute('data-scroll-target');
                    const target = parentDoc.getElementById(targetId);

                    if (!target) {
                        return;
                    }

                    event.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    window.parent.location.hash = targetId;
                    parentDoc.querySelectorAll('a[data-scroll-target]').forEach((item) => item.classList.remove('is-active'));
                    link.classList.add('is-active');
                });
            });

            const hash = window.parent.location.hash.replace('#', '');
            if (hash) {
                parentDoc.querySelectorAll('a[data-scroll-target]').forEach((item) => item.classList.remove('is-active'));
                const activeLink = parentDoc.querySelector(`a[data-scroll-target="${hash}"]`);
                if (activeLink) {
                    activeLink.classList.add('is-active');
                }
            }
        } catch (error) {
        }
    }

    bindLinks();
    setTimeout(bindLinks, 250);
    setTimeout(bindLinks, 1000);
    window.addEventListener('hashchange', bindLinks);
})();
</script>
""",
        height=0,
    )


def render_sidebar_navigation():
    def sidebar_icon_svg(kind):
        icons = {
            "home": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M4 11.5L12 5l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-8.5z' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'/></svg>",
            "chart": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M5 19h14' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'/><rect x='6' y='11' width='3' height='6' rx='0.8' fill='currentColor'/><rect x='11' y='8' width='3' height='9' rx='0.8' fill='currentColor'/><rect x='16' y='5' width='3' height='12' rx='0.8' fill='currentColor'/></svg>",
            "badge": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M12 3l7 3v5c0 4.6-2.9 8.5-7 10-4.1-1.5-7-5.4-7-10V6l7-3z' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'/><path d='M9 12l2 2 4-5' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>",
            "speed": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M4 14a8 8 0 1 1 16 0' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'/><path d='M12 13l4-4' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'/><circle cx='12' cy='14' r='1.6' fill='currentColor'/></svg>",
            "grid": "<svg viewBox='0 0 24 24' aria-hidden='true'><rect x='4' y='4' width='6' height='6' rx='1' fill='currentColor'/><rect x='14' y='4' width='6' height='6' rx='1' fill='currentColor'/><rect x='4' y='14' width='6' height='6' rx='1' fill='currentColor'/><rect x='14' y='14' width='6' height='6' rx='1' fill='currentColor'/></svg>",
            "bolt": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M13 2L5 13h6l-1 9 9-12h-6l0-8z' fill='currentColor'/></svg>",
            "trend": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M4 17l5-5 4 4 7-8' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/><path d='M16 8h4v4' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>",
            "bulb": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M9 18h6M10 21h4' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'/><path d='M12 3a6 6 0 0 0-3.5 10.9c.8.6 1.5 1.6 1.8 2.6h3.4c.3-1 1-2 1.8-2.6A6 6 0 0 0 12 3z' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'/></svg>",
            "report": "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'/><path d='M14 3v5h5' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'/><path d='M9 11h6M9 15h6M9 19h4' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'/></svg>",
        }
        return icons[kind]

    st.sidebar.markdown(
        """
<style>
.sidebar-nav-shell {
    background: transparent;
    border: none;
    border-radius: 0;
    padding: 0;
    box-shadow: none;
    position: sticky;
    top: 1rem;
}
.sidebar-nav-caption {
    font-size: 0.78rem;
    color: rgba(226, 232, 240, 0.62);
    margin-top: 0.95rem;
    padding-top: 0.9rem;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.sidebar-nav-link {
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 16px;
    margin: 6px 0;
    padding: 0.9rem 1rem;
    border: 1px solid rgba(148, 163, 184, 0.09);
    background: rgba(255, 255, 255, 0.02);
    color: #FFFFFF;
    text-decoration: none;
    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.sidebar-nav-link:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(148, 163, 184, 0.18);
    transform: translateX(3px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
}

.sidebar-nav-link.is-active {
    background: linear-gradient(135deg, rgba(79, 195, 247, 0.20), rgba(56, 189, 248, 0.10));
    border-color: rgba(79, 195, 247, 0.28);
    box-shadow: inset 0 0 0 1px rgba(79, 195, 247, 0.14), 0 10px 28px rgba(0, 0, 0, 0.24);
}

.sidebar-nav-link.is-active .sidebar-nav-icon {
    background: linear-gradient(135deg, rgba(79, 195, 247, 0.34), rgba(148, 163, 184, 0.14));
    border-color: rgba(79, 195, 247, 0.32);
}

.sidebar-nav-link .sidebar-nav-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 2.2rem;
    height: 2.2rem;
    border-radius: 0.9rem;
    background: linear-gradient(135deg, rgba(79, 195, 247, 0.18), rgba(148, 163, 184, 0.07));
    border: 1px solid rgba(148, 163, 184, 0.14);
    color: #FFFFFF;
    padding: 0.15rem;
}

.sidebar-nav-link .sidebar-nav-icon svg {
    width: 100%;
    height: 100%;
    display: block;
}

.sidebar-nav-link span:last-child {
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.01em;
}

.spa-section-anchor {
    scroll-margin-top: 90px;
}
</style>
""",
        unsafe_allow_html=True,
    )

    st.sidebar.markdown('<div class="sidebar-nav-shell">', unsafe_allow_html=True)
    st.sidebar.markdown('<div class="sidebar-nav-title"></div>', unsafe_allow_html=True)

    nav_items = [
        ("Dashboard Home", "dashboard-home", "home"),
        ("Market Analysis", "market-analysis", "chart"),
        ("Brand Analysis", "brand-analysis", "badge"),
        ("Model Analysis", "model-analysis", "speed"),
        ("Category Analysis", "category-analysis", "grid"),
        ("EV Analysis", "ev-analysis", "bolt"),
        ("Predictive Analytics", "predictive-analytics", "trend"),
        ("Business Insights", "business-insights", "bulb"),
        ("Reports", "reports", "report"),
    ]

    for label, anchor_id, kind in nav_items:
        st.sidebar.markdown(
            f'<a class="sidebar-nav-link" href="#{anchor_id}" data-scroll-target="{anchor_id}"><span class="sidebar-nav-icon">{sidebar_icon_svg(kind)}</span><span>{label}</span></a>',
            unsafe_allow_html=True,
        )

    st.sidebar.markdown('<div class="sidebar-nav-caption">Indian Automobile Market Analytics</div>', unsafe_allow_html=True)
    st.sidebar.markdown('</div>', unsafe_allow_html=True)


render_sidebar_navigation()
inject_smooth_scroll_script()

conn = get_connection()

try:
    render_section_anchor("dashboard-home")
    render_home(conn)

    render_section_anchor("market-analysis")
    render_market_analysis(conn)

    render_section_anchor("brand-analysis")
    render_brand_analysis(conn)

    render_section_anchor("model-analysis")
    render_model_analysis(conn)

    render_section_anchor("category-analysis")
    render_category_analysis(conn)

    render_section_anchor("ev-analysis")
    render_ev_analysis(conn)

    render_section_anchor("predictive-analytics")
    render_predictive_analytics(conn)

    render_section_anchor("business-insights")
    render_business_insights(conn)

    render_section_anchor("reports")
    render_reports(conn)
finally:
    conn.close()
