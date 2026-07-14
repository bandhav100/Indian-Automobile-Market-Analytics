--
-- PostgreSQL database dump
--

\restrict pamJlDf0cBowFBUhWVw8r8fAHrHARwQVfAgNffyePW52mcxGENxAZsU69ahj3sm

-- Dumped from database version 16.14 (Ubuntu 16.14-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.14 (Ubuntu 16.14-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: brands; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.brands (
    brand_id integer NOT NULL,
    brand_name character varying(100) NOT NULL,
    country character varying(50)
);


ALTER TABLE public.brands OWNER TO postgres;

--
-- Name: brands_brand_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.brands_brand_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.brands_brand_id_seq OWNER TO postgres;

--
-- Name: brands_brand_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.brands_brand_id_seq OWNED BY public.brands.brand_id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    category_id integer NOT NULL,
    category_name character varying(50) NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categories_category_id_seq OWNER TO postgres;

--
-- Name: categories_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_category_id_seq OWNED BY public.categories.category_id;


--
-- Name: ev_models; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ev_models (
    ev_model_id integer NOT NULL,
    brand_name character varying(100),
    model_name character varying(150),
    category character varying(100),
    fuel_type character varying(50),
    battery_capacity_kwh numeric(10,2),
    claimed_range_km integer,
    motor_power_hp integer,
    charging_type character varying(100),
    launch_year integer,
    discontinue_year integer,
    is_active boolean,
    avg_price_inr numeric(12,2),
    official_source text,
    source_url text
);


ALTER TABLE public.ev_models OWNER TO postgres;

--
-- Name: ev_models_ev_model_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ev_models_ev_model_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ev_models_ev_model_id_seq OWNER TO postgres;

--
-- Name: ev_models_ev_model_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ev_models_ev_model_id_seq OWNED BY public.ev_models.ev_model_id;


--
-- Name: ev_monthly_sales; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ev_monthly_sales (
    sale_id integer NOT NULL,
    brand_name character varying(100),
    model_name character varying(150),
    sales_year integer,
    sales_month integer,
    units_sold integer,
    data_quality character varying(100),
    official_source text,
    source_url text
);


ALTER TABLE public.ev_monthly_sales OWNER TO postgres;

--
-- Name: ev_monthly_sales_sale_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ev_monthly_sales_sale_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ev_monthly_sales_sale_id_seq OWNER TO postgres;

--
-- Name: ev_monthly_sales_sale_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ev_monthly_sales_sale_id_seq OWNED BY public.ev_monthly_sales.sale_id;


--
-- Name: models; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.models (
    model_id integer NOT NULL,
    brand_id integer,
    category_id integer,
    model_name character varying(100) NOT NULL,
    fuel_type character varying(50),
    launch_year integer,
    discontinue_year integer,
    avg_price numeric(12,2),
    is_active boolean
);


ALTER TABLE public.models OWNER TO postgres;

--
-- Name: models_model_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.models_model_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.models_model_id_seq OWNER TO postgres;

--
-- Name: models_model_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.models_model_id_seq OWNED BY public.models.model_id;


--
-- Name: sales; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sales (
    sale_id integer NOT NULL,
    model_id integer,
    sales_year integer NOT NULL,
    sales_month integer NOT NULL,
    units_sold integer NOT NULL
);


ALTER TABLE public.sales OWNER TO postgres;

--
-- Name: sales_sale_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sales_sale_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sales_sale_id_seq OWNER TO postgres;

--
-- Name: sales_sale_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sales_sale_id_seq OWNED BY public.sales.sale_id;


--
-- Name: brands brand_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brands ALTER COLUMN brand_id SET DEFAULT nextval('public.brands_brand_id_seq'::regclass);


--
-- Name: categories category_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN category_id SET DEFAULT nextval('public.categories_category_id_seq'::regclass);


--
-- Name: ev_models ev_model_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ev_models ALTER COLUMN ev_model_id SET DEFAULT nextval('public.ev_models_ev_model_id_seq'::regclass);


--
-- Name: ev_monthly_sales sale_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ev_monthly_sales ALTER COLUMN sale_id SET DEFAULT nextval('public.ev_monthly_sales_sale_id_seq'::regclass);


--
-- Name: models model_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.models ALTER COLUMN model_id SET DEFAULT nextval('public.models_model_id_seq'::regclass);


--
-- Name: sales sale_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales ALTER COLUMN sale_id SET DEFAULT nextval('public.sales_sale_id_seq'::regclass);


--
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.brands (brand_id, brand_name, country) FROM stdin;
1	Maruti Suzuki	India/Japan
2	Hyundai	South Korea
3	Tata Motors	India
4	Mahindra	India
5	Kia	South Korea
6	Toyota	Japan
7	Honda	Japan
8	MG	UK/China
9	Renault	France
10	Nissan	Japan
11	Skoda	Czech Republic
12	Volkswagen	Germany
13	Ford	USA
14	Datsun	Japan
15	Chevrolet	USA
16	Fiat	Italy
17	Mitsubishi	Japan
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (category_id, category_name) FROM stdin;
1	Hatchback
2	Premium Hatchback
3	Sedan
4	Compact Sedan
5	Compact SUV
6	Mid-Size SUV
7	Full-Size SUV
8	MPV
9	EV
\.


--
-- Data for Name: ev_models; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ev_models (ev_model_id, brand_name, model_name, category, fuel_type, battery_capacity_kwh, claimed_range_km, motor_power_hp, charging_type, launch_year, discontinue_year, is_active, avg_price_inr, official_source, source_url) FROM stdin;
1	Mahindra	e2o	Hatchback	Battery Electric (BEV)	10.00	100	25	AC 3.3 kW (Type 2)	2013	2016	f	700000.00	Mahindra & Mahindra Ltd. - Official Press Release	https://www.mahindra.com/
2	Mahindra	e2oPlus	Hatchback	Battery Electric (BEV)	12.00	140	30	AC 3.3 kW (Type 2)	2016	2019	f	800000.00	Mahindra & Mahindra Ltd. - Official Press Release	https://www.mahindra.com/
3	Mahindra	eVerito	Sedan	Battery Electric (BEV)	18.55	140	41	AC 3.3 kW (Type 2)	2016	2022	f	1200000.00	Mahindra & Mahindra Ltd. - Official Press Release	https://www.mahindra.com/
4	Tata	Tigor EV	Sedan	Battery Electric (BEV)	26.00	315	75	AC 3.3 kW / DC 25 kW CCS2	2019	\N	t	1299000.00	Tata Motors Ltd. - Official Website	https://ev.tatamotors.com/tigor-ev/
5	Tata	Nexon EV	SUV	Battery Electric (BEV)	40.50	489	143	AC 7.2 kW / DC 50 kW CCS2	2020	\N	t	1449000.00	Tata Motors Ltd. - Official Website	https://ev.tatamotors.com/nexon-ev/
6	MG	ZS EV	SUV	Battery Electric (BEV)	50.30	461	174	AC 7.4 kW / DC 76 kW CCS2	2020	\N	t	1898000.00	JSW MG Motor India - Official Website	https://www.mgmotor.co.in/zs-ev
7	Tata	Tiago EV	Hatchback	Battery Electric (BEV)	24.00	315	75	AC 3.3 kW / DC 25 kW CCS2	2022	\N	t	849000.00	Tata Motors Ltd. - Official Website	https://ev.tatamotors.com/tiago-ev/
8	Citroen	eC3	Hatchback	Battery Electric (BEV)	29.20	320	57	AC 3.3 kW / DC 30 kW CCS2	2023	\N	t	1299000.00	Citroen India (Stellantis) - Official Website	https://www.citroen.in/vehicles/new-ec3.html
9	BYD	Atto 3	SUV	Battery Electric (BEV)	60.48	521	201	AC 7 kW / DC 80 kW CCS2	2022	\N	t	2050000.00	BYD India - Official Website	https://www.byd.com/in/atto3
10	BYD	e6	MPV	Battery Electric (BEV)	71.70	520	95	AC 7 kW / DC 60 kW CCS2	2022	\N	t	2950000.00	BYD India - Official Website	https://www.byd.com/in/e6
11	Hyundai	Kona Electric	SUV	Battery Electric (BEV)	39.20	452	134	AC 7.2 kW / DC 50 kW CCS2	2019	2023	f	2384000.00	Hyundai Motor India Ltd. - Official Press Release	https://www.hyundai.com/in/en/
12	Mahindra	XUV400	SUV	Battery Electric (BEV)	39.40	456	150	AC 7.2 kW / DC 50 kW CCS2	2023	\N	t	1599000.00	Mahindra & Mahindra Ltd. - Official Website	https://www.mahindraelectricvehicles.com/xuv400
13	Tata	Punch EV	SUV	Battery Electric (BEV)	35.00	421	122	AC 7.2 kW / DC 50 kW CCS2	2024	\N	t	1099000.00	Tata Motors Ltd. - Official Website	https://ev.tatamotors.com/punch-ev/
14	MG	Comet EV	Hatchback	Battery Electric (BEV)	17.30	230	42	AC 3.3 kW / DC 20 kW CCS2	2023	\N	t	799000.00	JSW MG Motor India - Official Website	https://www.mgmotor.co.in/comet-ev
15	BYD	Seal	Sedan	Battery Electric (BEV)	82.50	650	308	AC 7 kW / DC 150 kW CCS2	2023	\N	t	4190000.00	BYD India - Official Website	https://www.byd.com/in/seal
16	Hyundai	Ioniq 5	Crossover	Battery Electric (BEV)	72.60	631	217	AC 11 kW / DC 350 kW CCS2	2023	\N	t	4665000.00	Hyundai Motor India Ltd. - Official Website	https://www.hyundai.com/in/en/find-a-car/ioniq-5
17	Kia	EV6	Crossover	Battery Electric (BEV)	77.40	708	229	AC 11 kW / DC 350 kW CCS2	2022	\N	t	6095000.00	Kia India - Official Website	https://www.kia.com/in/vehicles/ev6/
18	Kia	EV9	SUV	Battery Electric (BEV)	99.80	561	379	AC 11 kW / DC 210 kW CCS2	2024	\N	t	12995000.00	Kia India - Official Website	https://www.kia.com/in/vehicles/ev9/
19	MG	Windsor EV	Crossover	Battery Electric (BEV)	52.90	449	134	AC 7.4 kW / DC 60 kW CCS2	2024	\N	t	1349500.00	JSW MG Motor India - Official Website	https://www.mgmotor.co.in/windsor-ev
20	Mahindra	BE 6	SUV	Battery Electric (BEV)	79.00	683	282	AC 11 kW / DC 175 kW CCS2	2025	\N	t	1890000.00	Mahindra & Mahindra Ltd. - Official Website	https://www.mahindrabe.com/be-6
21	Mahindra	XEV 9e	SUV	Battery Electric (BEV)	79.00	656	282	AC 11 kW / DC 175 kW CCS2	2025	\N	t	2190000.00	Mahindra & Mahindra Ltd. - Official Website	https://www.mahindraxev.com/xev-9e
22	Tata	Curvv EV	Crossover	Battery Electric (BEV)	45.00	502	167	AC 7.2 kW / DC 70 kW CCS2	2024	\N	t	1749000.00	Tata Motors Ltd. - Official Website	https://ev.tatamotors.com/curvv-ev/
23	Hyundai	Creta Electric	SUV	Battery Electric (BEV)	51.40	473	169	AC 11 kW / DC 100 kW CCS2	2025	\N	t	1999000.00	Hyundai Motor India Ltd. - Official Website	https://www.hyundai.com/in/en/find-a-car/creta-electric
24	Maruti Suzuki	e Vitara	SUV	Battery Electric (BEV)	61.00	500	172	AC 11 kW / DC 70 kW CCS2	2025	\N	t	1749000.00	Maruti Suzuki India Ltd. - Official Website	https://www.marutisuzuki.com/e-vitara
25	Tata	Harrier EV	SUV	Battery Electric (BEV)	65.00	627	250	AC 11 kW / DC 100 kW CCS2	2025	\N	t	2199000.00	Tata Motors Ltd. - Official Website	https://ev.tatamotors.com/harrier-ev/
26	BYD	eMAX 7	MPV	Battery Electric (BEV)	55.40	420	161	AC 7 kW / DC 80 kW CCS2	2024	\N	t	2649000.00	BYD India - Official Website	https://www.byd.com/in/emax7
27	Kia	Carens Clavis EV	MPV	Battery Electric (BEV)	51.40	490	169	AC 11 kW / DC 100 kW CCS2	2025	\N	t	1899000.00	Kia India - Official Website	https://www.kia.com/in/vehicles/carens-clavis-ev/
28	Tata	Sierra EV	SUV	Battery Electric (BEV)	59.00	543	190	AC 11 kW / DC 100 kW CCS2	2026	\N	t	1879000.00	Tata Motors Ltd. - Official Website	https://ev.tatamotors.com/sierra-ev/
\.


--
-- Data for Name: ev_monthly_sales; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ev_monthly_sales (sale_id, brand_name, model_name, sales_year, sales_month, units_sold, data_quality, official_source, source_url) FROM stdin;
1	BYD	Atto 3	2022	6	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
2	BYD	Atto 3	2022	7	21	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
3	BYD	Atto 3	2022	8	24	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
4	BYD	Atto 3	2022	9	28	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
5	BYD	Atto 3	2022	10	32	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
6	BYD	Atto 3	2022	11	35	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
7	BYD	Atto 3	2022	12	40	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
8	BYD	Atto 3	2023	1	133	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
9	BYD	Atto 3	2023	2	137	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
10	BYD	Atto 3	2023	3	156	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
11	BYD	Atto 3	2023	4	142	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
12	BYD	Atto 3	2023	5	129	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
13	BYD	Atto 3	2023	6	118	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
14	BYD	Atto 3	2023	7	124	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
15	BYD	Atto 3	2023	8	142	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
16	BYD	Atto 3	2023	9	167	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
17	BYD	Atto 3	2023	10	194	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
18	BYD	Atto 3	2023	11	213	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
19	BYD	Atto 3	2023	12	245	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
20	BYD	Atto 3	2024	1	98	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
21	BYD	Atto 3	2024	2	101	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
22	BYD	Atto 3	2024	3	115	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
23	BYD	Atto 3	2024	4	105	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
24	BYD	Atto 3	2024	5	95	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
25	BYD	Atto 3	2024	6	87	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
26	BYD	Atto 3	2024	7	91	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
27	BYD	Atto 3	2024	8	105	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
28	BYD	Atto 3	2024	9	123	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
29	BYD	Atto 3	2024	10	143	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
30	BYD	Atto 3	2024	11	157	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
31	BYD	Atto 3	2024	12	180	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
32	BYD	Atto 3	2025	1	77	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
33	BYD	Atto 3	2025	2	79	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
34	BYD	Atto 3	2025	3	90	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
35	BYD	Atto 3	2025	4	82	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
36	BYD	Atto 3	2025	5	75	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
37	BYD	Atto 3	2025	6	68	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
38	BYD	Atto 3	2025	7	72	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
39	BYD	Atto 3	2025	8	82	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
40	BYD	Atto 3	2025	9	97	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
41	BYD	Atto 3	2025	10	112	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
42	BYD	Atto 3	2025	11	123	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
43	BYD	Atto 3	2025	12	143	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
44	BYD	Atto 3	2026	1	82	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
45	BYD	Atto 3	2026	2	84	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
46	BYD	Atto 3	2026	3	96	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
47	BYD	Atto 3	2026	4	87	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
48	BYD	Atto 3	2026	5	79	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
49	BYD	Atto 3	2026	6	72	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
50	BYD	Seal	2023	6	24	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
51	BYD	Seal	2023	7	26	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
52	BYD	Seal	2023	8	30	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
53	BYD	Seal	2023	9	35	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
54	BYD	Seal	2023	10	40	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
55	BYD	Seal	2023	11	44	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
56	BYD	Seal	2023	12	51	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
57	BYD	Seal	2024	1	63	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
58	BYD	Seal	2024	2	65	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
59	BYD	Seal	2024	3	74	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
60	BYD	Seal	2024	4	68	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
61	BYD	Seal	2024	5	61	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
62	BYD	Seal	2024	6	56	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
63	BYD	Seal	2024	7	58	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
64	BYD	Seal	2024	8	68	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
65	BYD	Seal	2024	9	79	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
66	BYD	Seal	2024	10	92	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
67	BYD	Seal	2024	11	101	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
68	BYD	Seal	2024	12	115	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
69	BYD	Seal	2025	1	49	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
70	BYD	Seal	2025	2	50	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
71	BYD	Seal	2025	3	57	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
72	BYD	Seal	2025	4	52	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
73	BYD	Seal	2025	5	48	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
74	BYD	Seal	2025	6	43	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
75	BYD	Seal	2025	7	46	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
76	BYD	Seal	2025	8	52	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
77	BYD	Seal	2025	9	62	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
78	BYD	Seal	2025	10	71	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
79	BYD	Seal	2025	11	78	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
80	BYD	Seal	2025	12	92	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
81	BYD	Seal	2026	1	49	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
82	BYD	Seal	2026	2	50	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
83	BYD	Seal	2026	3	57	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
84	BYD	Seal	2026	4	52	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
85	BYD	Seal	2026	5	48	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
86	BYD	Seal	2026	6	44	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
87	BYD	e6	2022	6	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
88	BYD	e6	2022	7	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
89	BYD	e6	2022	8	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
90	BYD	e6	2022	9	14	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
91	BYD	e6	2022	10	16	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
92	BYD	e6	2022	11	18	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
93	BYD	e6	2022	12	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
94	BYD	e6	2023	1	18	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
95	BYD	e6	2023	2	18	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
96	BYD	e6	2023	3	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
97	BYD	e6	2023	4	19	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
98	BYD	e6	2023	5	17	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
99	BYD	e6	2023	6	16	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
100	BYD	e6	2023	7	16	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
101	BYD	e6	2023	8	19	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
102	BYD	e6	2023	9	22	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
103	BYD	e6	2023	10	26	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
104	BYD	e6	2023	11	28	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
105	BYD	e6	2023	12	31	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
106	BYD	e6	2024	1	13	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
107	BYD	e6	2024	2	13	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
108	BYD	e6	2024	3	15	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
109	BYD	e6	2024	4	14	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
110	BYD	e6	2024	5	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
111	BYD	e6	2024	6	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
112	BYD	e6	2024	7	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
113	BYD	e6	2024	8	14	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
114	BYD	e6	2024	9	16	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
115	BYD	e6	2024	10	18	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
116	BYD	e6	2024	11	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
117	BYD	e6	2024	12	22	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
118	BYD	e6	2025	1	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
119	BYD	e6	2025	2	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
120	BYD	e6	2025	3	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
121	BYD	e6	2025	4	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
122	BYD	e6	2025	5	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
123	BYD	e6	2025	6	9	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
124	BYD	e6	2025	7	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
125	BYD	e6	2025	8	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
126	BYD	e6	2025	9	13	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
127	BYD	e6	2025	10	15	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
128	BYD	e6	2025	11	17	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
129	BYD	e6	2025	12	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
130	BYD	e6	2026	1	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
131	BYD	e6	2026	2	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
132	BYD	e6	2026	3	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
133	BYD	e6	2026	4	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
134	BYD	e6	2026	5	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
135	BYD	e6	2026	6	9	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
136	BYD	eMAX 7	2024	6	59	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
137	BYD	eMAX 7	2024	7	62	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
138	BYD	eMAX 7	2024	8	71	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
139	BYD	eMAX 7	2024	9	83	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
140	BYD	eMAX 7	2024	10	97	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
141	BYD	eMAX 7	2024	11	106	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
142	BYD	eMAX 7	2024	12	122	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
143	BYD	eMAX 7	2025	1	63	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
144	BYD	eMAX 7	2025	2	65	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
145	BYD	eMAX 7	2025	3	74	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
146	BYD	eMAX 7	2025	4	68	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
147	BYD	eMAX 7	2025	5	61	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
148	BYD	eMAX 7	2025	6	56	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
149	BYD	eMAX 7	2025	7	58	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
150	BYD	eMAX 7	2025	8	68	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
151	BYD	eMAX 7	2025	9	79	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
152	BYD	eMAX 7	2025	10	92	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
153	BYD	eMAX 7	2025	11	101	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
154	BYD	eMAX 7	2025	12	115	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
155	BYD	eMAX 7	2026	1	65	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
156	BYD	eMAX 7	2026	2	67	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
157	BYD	eMAX 7	2026	3	76	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
158	BYD	eMAX 7	2026	4	70	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
159	BYD	eMAX 7	2026	5	63	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
160	BYD	eMAX 7	2026	6	59	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
161	Citroen	eC3	2023	6	176	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
162	Citroen	eC3	2023	7	185	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
163	Citroen	eC3	2023	8	213	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
164	Citroen	eC3	2023	9	250	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
165	Citroen	eC3	2023	10	290	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
166	Citroen	eC3	2023	11	318	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
167	Citroen	eC3	2023	12	368	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
168	Citroen	eC3	2024	1	182	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
169	Citroen	eC3	2024	2	187	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
170	Citroen	eC3	2024	3	213	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
171	Citroen	eC3	2024	4	195	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
172	Citroen	eC3	2024	5	177	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
173	Citroen	eC3	2024	6	161	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
174	Citroen	eC3	2024	7	169	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
175	Citroen	eC3	2024	8	195	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
176	Citroen	eC3	2024	9	229	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
177	Citroen	eC3	2024	10	265	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
178	Citroen	eC3	2024	11	291	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
179	Citroen	eC3	2024	12	336	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
180	Citroen	eC3	2025	1	140	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
181	Citroen	eC3	2025	2	144	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
182	Citroen	eC3	2025	3	164	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
183	Citroen	eC3	2025	4	150	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
184	Citroen	eC3	2025	5	136	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
185	Citroen	eC3	2025	6	124	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
186	Citroen	eC3	2025	7	130	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
187	Citroen	eC3	2025	8	150	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
188	Citroen	eC3	2025	9	176	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
189	Citroen	eC3	2025	10	204	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
190	Citroen	eC3	2025	11	224	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
191	Citroen	eC3	2025	12	258	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
192	Citroen	eC3	2026	1	147	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
193	Citroen	eC3	2026	2	151	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
194	Citroen	eC3	2026	3	172	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
195	Citroen	eC3	2026	4	157	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
196	Citroen	eC3	2026	5	143	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
197	Citroen	eC3	2026	6	130	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
198	Hyundai	Creta Electric	2025	6	764	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
199	Hyundai	Creta Electric	2025	7	801	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
200	Hyundai	Creta Electric	2025	8	924	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
201	Hyundai	Creta Electric	2025	9	1084	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
202	Hyundai	Creta Electric	2025	10	1257	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
203	Hyundai	Creta Electric	2025	11	1380	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
204	Hyundai	Creta Electric	2025	12	1590	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
205	Hyundai	Creta Electric	2026	1	1126	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
206	Hyundai	Creta Electric	2026	2	1158	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
207	Hyundai	Creta Electric	2026	3	1319	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
208	Hyundai	Creta Electric	2026	4	1206	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
209	Hyundai	Creta Electric	2026	5	1094	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
210	Hyundai	Creta Electric	2026	6	997	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
211	Hyundai	Ioniq 5	2023	6	24	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
212	Hyundai	Ioniq 5	2023	7	26	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
213	Hyundai	Ioniq 5	2023	8	30	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
214	Hyundai	Ioniq 5	2023	9	35	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
215	Hyundai	Ioniq 5	2023	10	40	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
216	Hyundai	Ioniq 5	2023	11	44	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
217	Hyundai	Ioniq 5	2023	12	51	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
218	Hyundai	Ioniq 5	2024	1	42	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
219	Hyundai	Ioniq 5	2024	2	43	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
220	Hyundai	Ioniq 5	2024	3	49	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
221	Hyundai	Ioniq 5	2024	4	45	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
222	Hyundai	Ioniq 5	2024	5	41	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
223	Hyundai	Ioniq 5	2024	6	37	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
224	Hyundai	Ioniq 5	2024	7	39	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
225	Hyundai	Ioniq 5	2024	8	45	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
226	Hyundai	Ioniq 5	2024	9	53	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
227	Hyundai	Ioniq 5	2024	10	61	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
228	Hyundai	Ioniq 5	2024	11	67	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
229	Hyundai	Ioniq 5	2024	12	78	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
230	Hyundai	Ioniq 5	2025	1	32	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
231	Hyundai	Ioniq 5	2025	2	32	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
232	Hyundai	Ioniq 5	2025	3	37	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
233	Hyundai	Ioniq 5	2025	4	34	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
234	Hyundai	Ioniq 5	2025	5	31	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
235	Hyundai	Ioniq 5	2025	6	28	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
236	Hyundai	Ioniq 5	2025	7	29	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
237	Hyundai	Ioniq 5	2025	8	34	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
238	Hyundai	Ioniq 5	2025	9	40	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
239	Hyundai	Ioniq 5	2025	10	46	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
240	Hyundai	Ioniq 5	2025	11	50	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
241	Hyundai	Ioniq 5	2025	12	57	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
242	Hyundai	Ioniq 5	2026	1	33	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
243	Hyundai	Ioniq 5	2026	2	34	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
244	Hyundai	Ioniq 5	2026	3	38	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
245	Hyundai	Ioniq 5	2026	4	35	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
246	Hyundai	Ioniq 5	2026	5	32	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
247	Hyundai	Ioniq 5	2026	6	28	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
248	Hyundai	Kona Electric	2019	6	15	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
249	Hyundai	Kona Electric	2019	7	15	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
250	Hyundai	Kona Electric	2019	8	18	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
251	Hyundai	Kona Electric	2019	9	21	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
252	Hyundai	Kona Electric	2019	10	24	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
253	Hyundai	Kona Electric	2019	11	27	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
254	Hyundai	Kona Electric	2019	12	30	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
255	Hyundai	Kona Electric	2020	1	18	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
256	Hyundai	Kona Electric	2020	2	18	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
257	Hyundai	Kona Electric	2020	3	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
258	Hyundai	Kona Electric	2020	4	19	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
259	Hyundai	Kona Electric	2020	5	17	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
260	Hyundai	Kona Electric	2020	6	16	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
261	Hyundai	Kona Electric	2020	7	16	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
262	Hyundai	Kona Electric	2020	8	19	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
263	Hyundai	Kona Electric	2020	9	22	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
264	Hyundai	Kona Electric	2020	10	26	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
265	Hyundai	Kona Electric	2020	11	28	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
266	Hyundai	Kona Electric	2020	12	31	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
267	Hyundai	Kona Electric	2021	1	13	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
268	Hyundai	Kona Electric	2021	2	13	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
269	Hyundai	Kona Electric	2021	3	15	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
270	Hyundai	Kona Electric	2021	4	14	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
271	Hyundai	Kona Electric	2021	5	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
272	Hyundai	Kona Electric	2021	6	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
273	Hyundai	Kona Electric	2021	7	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
274	Hyundai	Kona Electric	2021	8	14	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
275	Hyundai	Kona Electric	2021	9	16	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
276	Hyundai	Kona Electric	2021	10	18	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
277	Hyundai	Kona Electric	2021	11	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
278	Hyundai	Kona Electric	2021	12	22	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
279	Hyundai	Kona Electric	2022	1	8	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
280	Hyundai	Kona Electric	2022	2	9	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
281	Hyundai	Kona Electric	2022	3	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
282	Hyundai	Kona Electric	2022	4	9	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
283	Hyundai	Kona Electric	2022	5	8	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
284	Hyundai	Kona Electric	2022	6	7	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
285	Hyundai	Kona Electric	2022	7	8	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
286	Hyundai	Kona Electric	2022	8	9	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
287	Hyundai	Kona Electric	2022	9	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
288	Hyundai	Kona Electric	2022	10	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
289	Hyundai	Kona Electric	2022	11	13	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
290	Hyundai	Kona Electric	2022	12	16	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
291	Hyundai	Kona Electric	2023	1	6	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
292	Hyundai	Kona Electric	2023	2	7	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
293	Hyundai	Kona Electric	2023	3	7	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
294	Hyundai	Kona Electric	2023	4	7	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
295	Hyundai	Kona Electric	2023	5	6	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
296	Hyundai	Kona Electric	2023	6	6	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
297	Hyundai	Kona Electric	2023	7	6	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
298	Hyundai	Kona Electric	2023	8	7	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
299	Hyundai	Kona Electric	2023	9	8	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
300	Kia	Carens Clavis EV	2025	6	118	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
301	Kia	Carens Clavis EV	2025	7	123	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
302	Kia	Carens Clavis EV	2025	8	142	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
303	Kia	Carens Clavis EV	2025	9	167	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
304	Kia	Carens Clavis EV	2025	10	193	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
305	Kia	Carens Clavis EV	2025	11	212	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
306	Kia	Carens Clavis EV	2025	12	245	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
307	Kia	Carens Clavis EV	2026	1	424	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
308	Kia	Carens Clavis EV	2026	2	436	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
309	Kia	Carens Clavis EV	2026	3	497	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
310	Kia	Carens Clavis EV	2026	4	455	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
311	Kia	Carens Clavis EV	2026	5	412	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
312	Kia	Carens Clavis EV	2026	6	376	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
313	Kia	EV6	2022	6	15	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
314	Kia	EV6	2022	7	15	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
315	Kia	EV6	2022	8	18	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
316	Kia	EV6	2022	9	21	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
317	Kia	EV6	2022	10	24	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
318	Kia	EV6	2022	11	27	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
319	Kia	EV6	2022	12	30	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
320	Kia	EV6	2023	1	32	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
321	Kia	EV6	2023	2	32	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
322	Kia	EV6	2023	3	37	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
323	Kia	EV6	2023	4	34	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
324	Kia	EV6	2023	5	31	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
325	Kia	EV6	2023	6	28	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
326	Kia	EV6	2023	7	29	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
327	Kia	EV6	2023	8	34	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
328	Kia	EV6	2023	9	40	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
329	Kia	EV6	2023	10	46	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
330	Kia	EV6	2023	11	50	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
331	Kia	EV6	2023	12	57	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
332	Kia	EV6	2024	1	27	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
333	Kia	EV6	2024	2	27	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
334	Kia	EV6	2024	3	31	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
335	Kia	EV6	2024	4	28	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
336	Kia	EV6	2024	5	26	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
337	Kia	EV6	2024	6	24	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
338	Kia	EV6	2024	7	25	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
339	Kia	EV6	2024	8	28	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
340	Kia	EV6	2024	9	33	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
341	Kia	EV6	2024	10	39	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
342	Kia	EV6	2024	11	43	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
343	Kia	EV6	2024	12	49	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
344	Kia	EV6	2025	1	21	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
345	Kia	EV6	2025	2	22	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
346	Kia	EV6	2025	3	25	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
347	Kia	EV6	2025	4	22	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
348	Kia	EV6	2025	5	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
349	Kia	EV6	2025	6	19	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
350	Kia	EV6	2025	7	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
351	Kia	EV6	2025	8	22	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
352	Kia	EV6	2025	9	26	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
353	Kia	EV6	2025	10	31	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
354	Kia	EV6	2025	11	34	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
355	Kia	EV6	2025	12	38	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
356	Kia	EV6	2026	1	23	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
357	Kia	EV6	2026	2	23	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
358	Kia	EV6	2026	3	27	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
359	Kia	EV6	2026	4	24	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
360	Kia	EV6	2026	5	22	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
361	Kia	EV6	2026	6	21	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
362	Kia	EV9	2024	6	8	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
363	Kia	EV9	2024	7	8	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
364	Kia	EV9	2024	8	9	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
365	Kia	EV9	2024	9	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
366	Kia	EV9	2024	10	13	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
367	Kia	EV9	2024	11	14	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
368	Kia	EV9	2024	12	17	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
369	Kia	EV9	2025	1	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
370	Kia	EV9	2025	2	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
371	Kia	EV9	2025	3	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
372	Kia	EV9	2025	4	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
373	Kia	EV9	2025	5	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
374	Kia	EV9	2025	6	9	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
375	Kia	EV9	2025	7	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
376	Kia	EV9	2025	8	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
377	Kia	EV9	2025	9	13	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
378	Kia	EV9	2025	10	15	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
379	Kia	EV9	2025	11	17	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
380	Kia	EV9	2025	12	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
381	Kia	EV9	2026	1	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
382	Kia	EV9	2026	2	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
383	Kia	EV9	2026	3	13	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
384	Kia	EV9	2026	4	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
385	Kia	EV9	2026	5	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
386	Kia	EV9	2026	6	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
387	MG	Comet EV	2023	6	421	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
388	MG	Comet EV	2023	7	442	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
389	MG	Comet EV	2023	8	509	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
390	MG	Comet EV	2023	9	598	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
391	MG	Comet EV	2023	10	693	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
392	MG	Comet EV	2023	11	761	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
393	MG	Comet EV	2023	12	876	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
394	MG	Comet EV	2024	1	434	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
395	MG	Comet EV	2024	2	446	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
396	MG	Comet EV	2024	3	508	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
397	MG	Comet EV	2024	4	465	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
398	MG	Comet EV	2024	5	422	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
399	MG	Comet EV	2024	6	384	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
400	MG	Comet EV	2024	7	403	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
401	MG	Comet EV	2024	8	465	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
402	MG	Comet EV	2024	9	546	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
403	MG	Comet EV	2024	10	632	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
404	MG	Comet EV	2024	11	694	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
405	MG	Comet EV	2024	12	801	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
406	MG	Comet EV	2025	1	336	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
407	MG	Comet EV	2025	2	346	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
408	MG	Comet EV	2025	3	394	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
409	MG	Comet EV	2025	4	360	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
410	MG	Comet EV	2025	5	326	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
411	MG	Comet EV	2025	6	298	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
412	MG	Comet EV	2025	7	312	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
413	MG	Comet EV	2025	8	360	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
414	MG	Comet EV	2025	9	422	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
415	MG	Comet EV	2025	10	490	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
416	MG	Comet EV	2025	11	538	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
417	MG	Comet EV	2025	12	618	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
418	MG	Comet EV	2026	1	310	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
419	MG	Comet EV	2026	2	319	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
420	MG	Comet EV	2026	3	363	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
421	MG	Comet EV	2026	4	332	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
422	MG	Comet EV	2026	5	301	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
423	MG	Comet EV	2026	6	275	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
424	MG	Windsor EV	2024	6	882	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
425	MG	Windsor EV	2024	7	924	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
426	MG	Windsor EV	2024	8	1066	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
427	MG	Windsor EV	2024	9	1251	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
428	MG	Windsor EV	2024	10	1450	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
429	MG	Windsor EV	2024	11	1592	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
430	MG	Windsor EV	2024	12	1835	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
431	MG	Windsor EV	2025	1	1960	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
432	MG	Windsor EV	2025	2	2016	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
433	MG	Windsor EV	2025	3	2296	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
434	MG	Windsor EV	2025	4	2100	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
435	MG	Windsor EV	2025	5	1904	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
436	MG	Windsor EV	2025	6	1736	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
437	MG	Windsor EV	2025	7	1820	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
438	MG	Windsor EV	2025	8	2100	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
439	MG	Windsor EV	2025	9	2464	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
440	MG	Windsor EV	2025	10	2856	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
441	MG	Windsor EV	2025	11	3136	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
442	MG	Windsor EV	2025	12	3612	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
443	MG	Windsor EV	2026	1	2529	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
444	MG	Windsor EV	2026	2	2601	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
445	MG	Windsor EV	2026	3	2963	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
446	MG	Windsor EV	2026	4	2710	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
447	MG	Windsor EV	2026	5	2457	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
448	MG	Windsor EV	2026	6	2240	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
449	MG	ZS EV	2020	6	59	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
450	MG	ZS EV	2020	7	62	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
451	MG	ZS EV	2020	8	71	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
452	MG	ZS EV	2020	9	83	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
453	MG	ZS EV	2020	10	97	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
454	MG	ZS EV	2020	11	106	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
455	MG	ZS EV	2020	12	122	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
456	MG	ZS EV	2021	1	98	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
457	MG	ZS EV	2021	2	101	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
458	MG	ZS EV	2021	3	115	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
459	MG	ZS EV	2021	4	105	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
460	MG	ZS EV	2021	5	95	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
461	MG	ZS EV	2021	6	87	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
462	MG	ZS EV	2021	7	91	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
463	MG	ZS EV	2021	8	105	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
464	MG	ZS EV	2021	9	123	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
465	MG	ZS EV	2021	10	143	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
466	MG	ZS EV	2021	11	157	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
467	MG	ZS EV	2021	12	180	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
468	MG	ZS EV	2022	1	168	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
469	MG	ZS EV	2022	2	173	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
470	MG	ZS EV	2022	3	197	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
471	MG	ZS EV	2022	4	180	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
472	MG	ZS EV	2022	5	163	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
473	MG	ZS EV	2022	6	149	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
474	MG	ZS EV	2022	7	156	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
475	MG	ZS EV	2022	8	180	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
476	MG	ZS EV	2022	9	211	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
477	MG	ZS EV	2022	10	245	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
478	MG	ZS EV	2022	11	269	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
479	MG	ZS EV	2022	12	309	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
480	MG	ZS EV	2023	1	266	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
481	MG	ZS EV	2023	2	274	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
482	MG	ZS EV	2023	3	312	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
483	MG	ZS EV	2023	4	285	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
484	MG	ZS EV	2023	5	258	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
485	MG	ZS EV	2023	6	236	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
486	MG	ZS EV	2023	7	247	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
487	MG	ZS EV	2023	8	285	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
488	MG	ZS EV	2023	9	334	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
489	MG	ZS EV	2023	10	388	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
490	MG	ZS EV	2023	11	426	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
491	MG	ZS EV	2023	12	489	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
492	MG	ZS EV	2024	1	224	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
493	MG	ZS EV	2024	2	230	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
494	MG	ZS EV	2024	3	262	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
495	MG	ZS EV	2024	4	240	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
496	MG	ZS EV	2024	5	218	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
497	MG	ZS EV	2024	6	198	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
498	MG	ZS EV	2024	7	208	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
499	MG	ZS EV	2024	8	240	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
500	MG	ZS EV	2024	9	282	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
501	MG	ZS EV	2024	10	326	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
502	MG	ZS EV	2024	11	358	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
503	MG	ZS EV	2024	12	414	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
504	MG	ZS EV	2025	1	245	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
505	MG	ZS EV	2025	2	252	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
506	MG	ZS EV	2025	3	287	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
507	MG	ZS EV	2025	4	262	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
508	MG	ZS EV	2025	5	238	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
509	MG	ZS EV	2025	6	217	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
510	MG	ZS EV	2025	7	228	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
511	MG	ZS EV	2025	8	262	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
512	MG	ZS EV	2025	9	308	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
513	MG	ZS EV	2025	10	357	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
514	MG	ZS EV	2025	11	392	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
515	MG	ZS EV	2025	12	452	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
516	MG	ZS EV	2026	1	261	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
517	MG	ZS EV	2026	2	269	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
518	MG	ZS EV	2026	3	306	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
519	MG	ZS EV	2026	4	280	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
520	MG	ZS EV	2026	5	254	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
521	MG	ZS EV	2026	6	230	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
522	Mahindra	BE 6	2025	6	930	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
523	Mahindra	BE 6	2025	7	976	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
524	Mahindra	BE 6	2025	8	1126	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
525	Mahindra	BE 6	2025	9	1321	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
526	Mahindra	BE 6	2025	10	1531	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
527	Mahindra	BE 6	2025	11	1681	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
528	Mahindra	BE 6	2025	12	1935	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
529	Mahindra	BE 6	2026	1	1338	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
530	Mahindra	BE 6	2026	2	1376	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
531	Mahindra	BE 6	2026	3	1567	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
532	Mahindra	BE 6	2026	4	1434	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
533	Mahindra	BE 6	2026	5	1300	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
534	Mahindra	BE 6	2026	6	1185	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
535	Mahindra	XEV 9e	2025	6	607	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
536	Mahindra	XEV 9e	2025	7	637	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
537	Mahindra	XEV 9e	2025	8	735	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
538	Mahindra	XEV 9e	2025	9	862	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
539	Mahindra	XEV 9e	2025	10	999	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
540	Mahindra	XEV 9e	2025	11	1097	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
541	Mahindra	XEV 9e	2025	12	1263	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
542	Mahindra	XEV 9e	2026	1	832	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
543	Mahindra	XEV 9e	2026	2	856	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
544	Mahindra	XEV 9e	2026	3	975	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
545	Mahindra	XEV 9e	2026	4	892	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
546	Mahindra	XEV 9e	2026	5	808	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
547	Mahindra	XEV 9e	2026	6	737	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
548	Mahindra	XUV400	2023	6	411	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
549	Mahindra	XUV400	2023	7	431	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
550	Mahindra	XUV400	2023	8	498	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
551	Mahindra	XUV400	2023	9	584	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
552	Mahindra	XUV400	2023	10	677	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
553	Mahindra	XUV400	2023	11	743	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
554	Mahindra	XUV400	2023	12	856	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
555	Mahindra	XUV400	2024	1	686	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
556	Mahindra	XUV400	2024	2	706	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
557	Mahindra	XUV400	2024	3	804	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
558	Mahindra	XUV400	2024	4	735	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
559	Mahindra	XUV400	2024	5	666	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
560	Mahindra	XUV400	2024	6	608	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
561	Mahindra	XUV400	2024	7	637	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
562	Mahindra	XUV400	2024	8	735	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
563	Mahindra	XUV400	2024	9	862	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
564	Mahindra	XUV400	2024	10	1000	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
565	Mahindra	XUV400	2024	11	1098	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
566	Mahindra	XUV400	2024	12	1263	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
567	Mahindra	XUV400	2025	1	595	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
568	Mahindra	XUV400	2025	2	612	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
569	Mahindra	XUV400	2025	3	697	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
570	Mahindra	XUV400	2025	4	638	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
571	Mahindra	XUV400	2025	5	578	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
572	Mahindra	XUV400	2025	6	527	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
573	Mahindra	XUV400	2025	7	552	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
574	Mahindra	XUV400	2025	8	638	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
575	Mahindra	XUV400	2025	9	748	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
576	Mahindra	XUV400	2025	10	867	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
577	Mahindra	XUV400	2025	11	952	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
578	Mahindra	XUV400	2025	12	1096	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
579	Mahindra	XUV400	2026	1	620	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
580	Mahindra	XUV400	2026	2	638	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
581	Mahindra	XUV400	2026	3	726	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
582	Mahindra	XUV400	2026	4	664	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
583	Mahindra	XUV400	2026	5	602	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
584	Mahindra	XUV400	2026	6	550	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
585	Mahindra	e2o	2013	6	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
586	Mahindra	e2o	2013	7	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
587	Mahindra	e2o	2013	8	14	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
588	Mahindra	e2o	2013	9	17	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
589	Mahindra	e2o	2013	10	19	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
590	Mahindra	e2o	2013	11	21	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
591	Mahindra	e2o	2013	12	25	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
592	Mahindra	e2o	2014	1	60	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
593	Mahindra	e2o	2014	2	61	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
594	Mahindra	e2o	2014	3	70	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
595	Mahindra	e2o	2014	4	64	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
596	Mahindra	e2o	2014	5	58	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
597	Mahindra	e2o	2014	6	53	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
598	Mahindra	e2o	2014	7	55	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
599	Mahindra	e2o	2014	8	64	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
600	Mahindra	e2o	2014	9	75	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
601	Mahindra	e2o	2014	10	87	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
602	Mahindra	e2o	2014	11	95	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
603	Mahindra	e2o	2014	12	108	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
604	Mahindra	e2o	2015	1	46	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
605	Mahindra	e2o	2015	2	47	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
606	Mahindra	e2o	2015	3	53	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
607	Mahindra	e2o	2015	4	49	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
608	Mahindra	e2o	2015	5	44	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
609	Mahindra	e2o	2015	6	40	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
610	Mahindra	e2o	2015	7	42	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
611	Mahindra	e2o	2015	8	49	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
612	Mahindra	e2o	2015	9	57	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
613	Mahindra	e2o	2015	10	66	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
614	Mahindra	e2o	2015	11	73	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
615	Mahindra	e2o	2015	12	84	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
616	Mahindra	e2o	2016	1	32	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
617	Mahindra	e2o	2016	2	33	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
618	Mahindra	e2o	2016	3	37	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
619	Mahindra	e2o	2016	4	34	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
620	Mahindra	e2o	2016	5	31	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
621	Mahindra	e2o	2016	6	28	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
622	Mahindra	e2o	2016	7	30	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
623	Mahindra	e2o	2016	8	34	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
624	Mahindra	e2o	2016	9	41	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
625	Mahindra	e2oPlus	2016	6	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
626	Mahindra	e2oPlus	2016	7	21	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
627	Mahindra	e2oPlus	2016	8	24	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
628	Mahindra	e2oPlus	2016	9	28	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
629	Mahindra	e2oPlus	2016	10	32	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
630	Mahindra	e2oPlus	2016	11	35	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
631	Mahindra	e2oPlus	2016	12	40	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
632	Mahindra	e2oPlus	2017	1	42	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
633	Mahindra	e2oPlus	2017	2	43	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
634	Mahindra	e2oPlus	2017	3	49	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
635	Mahindra	e2oPlus	2017	4	45	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
636	Mahindra	e2oPlus	2017	5	41	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
637	Mahindra	e2oPlus	2017	6	37	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
638	Mahindra	e2oPlus	2017	7	39	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
639	Mahindra	e2oPlus	2017	8	45	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
640	Mahindra	e2oPlus	2017	9	53	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
641	Mahindra	e2oPlus	2017	10	61	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
642	Mahindra	e2oPlus	2017	11	67	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
643	Mahindra	e2oPlus	2017	12	78	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
644	Mahindra	e2oPlus	2018	1	32	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
645	Mahindra	e2oPlus	2018	2	32	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
646	Mahindra	e2oPlus	2018	3	37	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
647	Mahindra	e2oPlus	2018	4	34	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
648	Mahindra	e2oPlus	2018	5	31	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
649	Mahindra	e2oPlus	2018	6	28	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
650	Mahindra	e2oPlus	2018	7	29	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
651	Mahindra	e2oPlus	2018	8	34	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
652	Mahindra	e2oPlus	2018	9	40	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
653	Mahindra	e2oPlus	2018	10	46	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
654	Mahindra	e2oPlus	2018	11	50	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
655	Mahindra	e2oPlus	2018	12	57	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
656	Mahindra	e2oPlus	2019	1	16	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
657	Mahindra	e2oPlus	2019	2	16	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
658	Mahindra	e2oPlus	2019	3	19	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
659	Mahindra	e2oPlus	2019	4	17	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
660	Mahindra	e2oPlus	2019	5	16	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
661	Mahindra	e2oPlus	2019	6	14	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
662	Mahindra	e2oPlus	2019	7	15	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
663	Mahindra	e2oPlus	2019	8	17	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
664	Mahindra	e2oPlus	2019	9	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
665	Mahindra	eVerito	2016	6	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
666	Mahindra	eVerito	2016	7	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
667	Mahindra	eVerito	2016	8	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
668	Mahindra	eVerito	2016	9	14	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
669	Mahindra	eVerito	2016	10	16	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
670	Mahindra	eVerito	2016	11	18	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
671	Mahindra	eVerito	2016	12	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
672	Mahindra	eVerito	2017	1	21	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
673	Mahindra	eVerito	2017	2	22	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
674	Mahindra	eVerito	2017	3	25	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
675	Mahindra	eVerito	2017	4	22	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
676	Mahindra	eVerito	2017	5	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
677	Mahindra	eVerito	2017	6	19	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
678	Mahindra	eVerito	2017	7	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
679	Mahindra	eVerito	2017	8	22	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
680	Mahindra	eVerito	2017	9	26	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
681	Mahindra	eVerito	2017	10	31	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
682	Mahindra	eVerito	2017	11	34	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
683	Mahindra	eVerito	2017	12	38	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
684	Mahindra	eVerito	2018	1	28	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
685	Mahindra	eVerito	2018	2	29	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
686	Mahindra	eVerito	2018	3	33	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
687	Mahindra	eVerito	2018	4	30	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
688	Mahindra	eVerito	2018	5	27	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
689	Mahindra	eVerito	2018	6	25	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
690	Mahindra	eVerito	2018	7	26	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
691	Mahindra	eVerito	2018	8	30	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
692	Mahindra	eVerito	2018	9	35	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
693	Mahindra	eVerito	2018	10	41	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
694	Mahindra	eVerito	2018	11	45	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
695	Mahindra	eVerito	2018	12	51	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
696	Mahindra	eVerito	2019	1	25	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
697	Mahindra	eVerito	2019	2	25	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
698	Mahindra	eVerito	2019	3	29	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
699	Mahindra	eVerito	2019	4	26	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
700	Mahindra	eVerito	2019	5	24	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
701	Mahindra	eVerito	2019	6	22	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
702	Mahindra	eVerito	2019	7	23	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
703	Mahindra	eVerito	2019	8	26	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
704	Mahindra	eVerito	2019	9	31	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
705	Mahindra	eVerito	2019	10	36	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
706	Mahindra	eVerito	2019	11	39	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
707	Mahindra	eVerito	2019	12	44	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
708	Mahindra	eVerito	2020	1	14	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
709	Mahindra	eVerito	2020	2	14	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
710	Mahindra	eVerito	2020	3	16	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
711	Mahindra	eVerito	2020	4	15	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
712	Mahindra	eVerito	2020	5	14	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
713	Mahindra	eVerito	2020	6	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
714	Mahindra	eVerito	2020	7	13	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
715	Mahindra	eVerito	2020	8	15	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
716	Mahindra	eVerito	2020	9	18	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
717	Mahindra	eVerito	2020	10	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
718	Mahindra	eVerito	2020	11	22	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
719	Mahindra	eVerito	2020	12	27	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
720	Mahindra	eVerito	2021	1	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
721	Mahindra	eVerito	2021	2	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
722	Mahindra	eVerito	2021	3	12	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
723	Mahindra	eVerito	2021	4	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
724	Mahindra	eVerito	2021	5	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
725	Mahindra	eVerito	2021	6	9	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
726	Mahindra	eVerito	2021	7	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
727	Mahindra	eVerito	2021	8	11	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
728	Mahindra	eVerito	2021	9	13	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
729	Mahindra	eVerito	2021	10	15	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
730	Mahindra	eVerito	2021	11	17	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
731	Mahindra	eVerito	2021	12	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
732	Mahindra	eVerito	2022	1	9	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
733	Mahindra	eVerito	2022	2	9	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
734	Mahindra	eVerito	2022	3	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
735	Mahindra	eVerito	2022	4	9	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
736	Mahindra	eVerito	2022	5	8	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
737	Mahindra	eVerito	2022	6	8	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
738	Mahindra	eVerito	2022	7	8	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
739	Mahindra	eVerito	2022	8	9	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
740	Mahindra	eVerito	2022	9	10	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
741	Maruti Suzuki	e Vitara	2025	6	206	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
742	Maruti Suzuki	e Vitara	2025	7	216	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
743	Maruti Suzuki	e Vitara	2025	8	249	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
744	Maruti Suzuki	e Vitara	2025	9	292	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
745	Maruti Suzuki	e Vitara	2025	10	338	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
746	Maruti Suzuki	e Vitara	2025	11	372	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
747	Maruti Suzuki	e Vitara	2025	12	427	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
748	Maruti Suzuki	e Vitara	2026	1	1599	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
749	Maruti Suzuki	e Vitara	2026	2	1645	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
750	Maruti Suzuki	e Vitara	2026	3	1873	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
751	Maruti Suzuki	e Vitara	2026	4	1713	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
752	Maruti Suzuki	e Vitara	2026	5	1553	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
753	Maruti Suzuki	e Vitara	2026	6	1417	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
754	Tata	Curvv EV	2024	6	313	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
755	Tata	Curvv EV	2024	7	329	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
756	Tata	Curvv EV	2024	8	379	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
757	Tata	Curvv EV	2024	9	445	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
758	Tata	Curvv EV	2024	10	516	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
759	Tata	Curvv EV	2024	11	566	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
760	Tata	Curvv EV	2024	12	652	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
761	Tata	Curvv EV	2025	1	686	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
762	Tata	Curvv EV	2025	2	706	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
763	Tata	Curvv EV	2025	3	804	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
764	Tata	Curvv EV	2025	4	735	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
765	Tata	Curvv EV	2025	5	666	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
766	Tata	Curvv EV	2025	6	608	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
767	Tata	Curvv EV	2025	7	637	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
768	Tata	Curvv EV	2025	8	735	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
769	Tata	Curvv EV	2025	9	862	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
770	Tata	Curvv EV	2025	10	1000	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
771	Tata	Curvv EV	2025	11	1098	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
772	Tata	Curvv EV	2025	12	1263	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
773	Tata	Curvv EV	2026	1	848	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
774	Tata	Curvv EV	2026	2	873	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
775	Tata	Curvv EV	2026	3	994	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
776	Tata	Curvv EV	2026	4	909	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
777	Tata	Curvv EV	2026	5	824	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
778	Tata	Curvv EV	2026	6	752	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
779	Tata	Harrier EV	2025	6	353	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
780	Tata	Harrier EV	2025	7	370	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
781	Tata	Harrier EV	2025	8	427	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
782	Tata	Harrier EV	2025	9	500	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
783	Tata	Harrier EV	2025	10	580	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
784	Tata	Harrier EV	2025	11	637	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
785	Tata	Harrier EV	2025	12	733	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
786	Tata	Harrier EV	2026	1	881	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
787	Tata	Harrier EV	2026	2	906	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
788	Tata	Harrier EV	2026	3	1032	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
789	Tata	Harrier EV	2026	4	944	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
790	Tata	Harrier EV	2026	5	856	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
791	Tata	Harrier EV	2026	6	781	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
792	Tata	Nexon EV	2020	6	245	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
793	Tata	Nexon EV	2020	7	257	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
794	Tata	Nexon EV	2020	8	296	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
795	Tata	Nexon EV	2020	9	348	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
796	Tata	Nexon EV	2020	10	403	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
797	Tata	Nexon EV	2020	11	442	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
798	Tata	Nexon EV	2020	12	509	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
799	Tata	Nexon EV	2021	1	462	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
800	Tata	Nexon EV	2021	2	475	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
801	Tata	Nexon EV	2021	3	541	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
802	Tata	Nexon EV	2021	4	495	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
803	Tata	Nexon EV	2021	5	449	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
804	Tata	Nexon EV	2021	6	409	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
805	Tata	Nexon EV	2021	7	429	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
806	Tata	Nexon EV	2021	8	495	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
807	Tata	Nexon EV	2021	9	581	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
808	Tata	Nexon EV	2021	10	673	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
809	Tata	Nexon EV	2021	11	739	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
810	Tata	Nexon EV	2021	12	852	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
811	Tata	Nexon EV	2022	1	1435	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
812	Tata	Nexon EV	2022	2	1476	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
813	Tata	Nexon EV	2022	3	1681	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
814	Tata	Nexon EV	2022	4	1538	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
815	Tata	Nexon EV	2022	5	1394	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
816	Tata	Nexon EV	2022	6	1271	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
817	Tata	Nexon EV	2022	7	1332	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
818	Tata	Nexon EV	2022	8	1538	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
819	Tata	Nexon EV	2022	9	1804	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
820	Tata	Nexon EV	2022	10	2091	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
821	Tata	Nexon EV	2022	11	2296	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
822	Tata	Nexon EV	2022	12	2644	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
823	Tata	Nexon EV	2023	1	2310	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
824	Tata	Nexon EV	2023	2	2376	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
825	Tata	Nexon EV	2023	3	2706	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
826	Tata	Nexon EV	2023	4	2475	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
827	Tata	Nexon EV	2023	5	2244	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
828	Tata	Nexon EV	2023	6	2046	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
829	Tata	Nexon EV	2023	7	2145	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
830	Tata	Nexon EV	2023	8	2475	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
831	Tata	Nexon EV	2023	9	2904	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
832	Tata	Nexon EV	2023	10	3366	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
833	Tata	Nexon EV	2023	11	3696	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
834	Tata	Nexon EV	2023	12	4257	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
835	Tata	Nexon EV	2024	1	2660	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
836	Tata	Nexon EV	2024	2	2736	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
837	Tata	Nexon EV	2024	3	3116	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
838	Tata	Nexon EV	2024	4	2850	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
839	Tata	Nexon EV	2024	5	2584	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
840	Tata	Nexon EV	2024	6	2356	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
841	Tata	Nexon EV	2024	7	2470	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
842	Tata	Nexon EV	2024	8	2850	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
843	Tata	Nexon EV	2024	9	3344	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
844	Tata	Nexon EV	2024	10	3876	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
845	Tata	Nexon EV	2024	11	4256	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
846	Tata	Nexon EV	2024	12	4902	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
847	Tata	Nexon EV	2025	1	2940	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
848	Tata	Nexon EV	2025	2	3024	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
849	Tata	Nexon EV	2025	3	3444	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
850	Tata	Nexon EV	2025	4	3150	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
851	Tata	Nexon EV	2025	5	2856	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
852	Tata	Nexon EV	2025	6	2604	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
853	Tata	Nexon EV	2025	7	2730	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
854	Tata	Nexon EV	2025	8	3150	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
855	Tata	Nexon EV	2025	9	3696	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
856	Tata	Nexon EV	2025	10	4284	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
857	Tata	Nexon EV	2025	11	4704	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
858	Tata	Nexon EV	2025	12	5418	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
859	Tata	Nexon EV	2026	1	3100	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
860	Tata	Nexon EV	2026	2	3189	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
861	Tata	Nexon EV	2026	3	3632	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
862	Tata	Nexon EV	2026	4	3322	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
863	Tata	Nexon EV	2026	5	3012	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
864	Tata	Nexon EV	2026	6	2745	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
865	Tata	Punch EV	2024	6	1175	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
866	Tata	Punch EV	2024	7	1232	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
867	Tata	Punch EV	2024	8	1422	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
868	Tata	Punch EV	2024	9	1668	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
869	Tata	Punch EV	2024	10	1934	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
870	Tata	Punch EV	2024	11	2123	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
871	Tata	Punch EV	2024	12	2446	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
872	Tata	Punch EV	2025	1	2660	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
873	Tata	Punch EV	2025	2	2736	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
874	Tata	Punch EV	2025	3	3116	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
875	Tata	Punch EV	2025	4	2850	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
876	Tata	Punch EV	2025	5	2584	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
877	Tata	Punch EV	2025	6	2356	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
878	Tata	Punch EV	2025	7	2470	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
879	Tata	Punch EV	2025	8	2850	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
880	Tata	Punch EV	2025	9	3344	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
881	Tata	Punch EV	2025	10	3876	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
882	Tata	Punch EV	2025	11	4256	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
883	Tata	Punch EV	2025	12	4902	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
884	Tata	Punch EV	2026	1	3427	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
885	Tata	Punch EV	2026	2	3524	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
886	Tata	Punch EV	2026	3	4014	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
887	Tata	Punch EV	2026	4	3671	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
888	Tata	Punch EV	2026	5	3329	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
889	Tata	Punch EV	2026	6	3035	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
890	Tata	Sierra EV	2026	6	800	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
891	Tata	Tiago EV	2022	6	255	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
892	Tata	Tiago EV	2022	7	267	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
893	Tata	Tiago EV	2022	8	308	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
894	Tata	Tiago EV	2022	9	361	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
895	Tata	Tiago EV	2022	10	419	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
896	Tata	Tiago EV	2022	11	460	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
897	Tata	Tiago EV	2022	12	530	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
898	Tata	Tiago EV	2023	1	980	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
899	Tata	Tiago EV	2023	2	1008	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
900	Tata	Tiago EV	2023	3	1148	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
901	Tata	Tiago EV	2023	4	1050	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
902	Tata	Tiago EV	2023	5	952	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
903	Tata	Tiago EV	2023	6	868	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
904	Tata	Tiago EV	2023	7	910	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
905	Tata	Tiago EV	2023	8	1050	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
906	Tata	Tiago EV	2023	9	1232	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
907	Tata	Tiago EV	2023	10	1428	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
908	Tata	Tiago EV	2023	11	1568	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
909	Tata	Tiago EV	2023	12	1806	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
910	Tata	Tiago EV	2024	1	875	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
911	Tata	Tiago EV	2024	2	900	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
912	Tata	Tiago EV	2024	3	1025	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
913	Tata	Tiago EV	2024	4	938	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
914	Tata	Tiago EV	2024	5	850	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
915	Tata	Tiago EV	2024	6	775	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
916	Tata	Tiago EV	2024	7	812	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
917	Tata	Tiago EV	2024	8	938	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
918	Tata	Tiago EV	2024	9	1100	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
919	Tata	Tiago EV	2024	10	1275	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
920	Tata	Tiago EV	2024	11	1400	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
921	Tata	Tiago EV	2024	12	1612	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
922	Tata	Tiago EV	2025	1	770	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
923	Tata	Tiago EV	2025	2	792	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
924	Tata	Tiago EV	2025	3	902	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
925	Tata	Tiago EV	2025	4	825	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
926	Tata	Tiago EV	2025	5	748	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
927	Tata	Tiago EV	2025	6	682	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
928	Tata	Tiago EV	2025	7	715	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
929	Tata	Tiago EV	2025	8	825	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
930	Tata	Tiago EV	2025	9	968	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
931	Tata	Tiago EV	2025	10	1122	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
932	Tata	Tiago EV	2025	11	1232	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
933	Tata	Tiago EV	2025	12	1419	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
934	Tata	Tiago EV	2026	1	816	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
935	Tata	Tiago EV	2026	2	839	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
936	Tata	Tiago EV	2026	3	956	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
937	Tata	Tiago EV	2026	4	874	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
938	Tata	Tiago EV	2026	5	793	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
939	Tata	Tiago EV	2026	6	722	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
940	Tata	Tigor EV	2019	6	20	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
941	Tata	Tigor EV	2019	7	21	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
942	Tata	Tigor EV	2019	8	24	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
943	Tata	Tigor EV	2019	9	28	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
944	Tata	Tigor EV	2019	10	32	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
945	Tata	Tigor EV	2019	11	35	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
946	Tata	Tigor EV	2019	12	40	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
947	Tata	Tigor EV	2020	1	84	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
948	Tata	Tigor EV	2020	2	86	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
949	Tata	Tigor EV	2020	3	98	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
950	Tata	Tigor EV	2020	4	90	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
951	Tata	Tigor EV	2020	5	82	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
952	Tata	Tigor EV	2020	6	74	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
953	Tata	Tigor EV	2020	7	78	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
954	Tata	Tigor EV	2020	8	90	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
955	Tata	Tigor EV	2020	9	106	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
956	Tata	Tigor EV	2020	10	122	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
957	Tata	Tigor EV	2020	11	134	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
958	Tata	Tigor EV	2020	12	156	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
959	Tata	Tigor EV	2021	1	210	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
960	Tata	Tigor EV	2021	2	216	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
961	Tata	Tigor EV	2021	3	246	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
962	Tata	Tigor EV	2021	4	225	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
963	Tata	Tigor EV	2021	5	204	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
964	Tata	Tigor EV	2021	6	186	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
965	Tata	Tigor EV	2021	7	195	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
966	Tata	Tigor EV	2021	8	225	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
967	Tata	Tigor EV	2021	9	264	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
968	Tata	Tigor EV	2021	10	306	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
969	Tata	Tigor EV	2021	11	336	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
970	Tata	Tigor EV	2021	12	387	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
971	Tata	Tigor EV	2022	1	455	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
972	Tata	Tigor EV	2022	2	468	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
973	Tata	Tigor EV	2022	3	533	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
974	Tata	Tigor EV	2022	4	488	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
975	Tata	Tigor EV	2022	5	442	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
976	Tata	Tigor EV	2022	6	403	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
977	Tata	Tigor EV	2022	7	422	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
978	Tata	Tigor EV	2022	8	488	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
979	Tata	Tigor EV	2022	9	572	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
980	Tata	Tigor EV	2022	10	663	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
981	Tata	Tigor EV	2022	11	728	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
982	Tata	Tigor EV	2022	12	838	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
983	Tata	Tigor EV	2023	1	560	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
984	Tata	Tigor EV	2023	2	576	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
985	Tata	Tigor EV	2023	3	656	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
986	Tata	Tigor EV	2023	4	600	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
987	Tata	Tigor EV	2023	5	544	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
988	Tata	Tigor EV	2023	6	496	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
989	Tata	Tigor EV	2023	7	520	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
990	Tata	Tigor EV	2023	8	600	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
991	Tata	Tigor EV	2023	9	704	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
992	Tata	Tigor EV	2023	10	816	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
993	Tata	Tigor EV	2023	11	896	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
994	Tata	Tigor EV	2023	12	1032	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
995	Tata	Tigor EV	2024	1	420	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
996	Tata	Tigor EV	2024	2	432	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
997	Tata	Tigor EV	2024	3	492	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
998	Tata	Tigor EV	2024	4	450	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
999	Tata	Tigor EV	2024	5	408	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1000	Tata	Tigor EV	2024	6	372	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1001	Tata	Tigor EV	2024	7	390	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1002	Tata	Tigor EV	2024	8	450	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1003	Tata	Tigor EV	2024	9	528	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1004	Tata	Tigor EV	2024	10	612	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1005	Tata	Tigor EV	2024	11	672	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1006	Tata	Tigor EV	2024	12	774	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1007	Tata	Tigor EV	2025	1	385	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1008	Tata	Tigor EV	2025	2	396	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1009	Tata	Tigor EV	2025	3	451	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1010	Tata	Tigor EV	2025	4	412	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1011	Tata	Tigor EV	2025	5	374	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1012	Tata	Tigor EV	2025	6	341	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1013	Tata	Tigor EV	2025	7	358	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1014	Tata	Tigor EV	2025	8	412	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1015	Tata	Tigor EV	2025	9	484	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1016	Tata	Tigor EV	2025	10	561	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1017	Tata	Tigor EV	2025	11	616	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1018	Tata	Tigor EV	2025	12	710	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1019	Tata	Tigor EV	2026	1	408	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1020	Tata	Tigor EV	2026	2	420	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1021	Tata	Tigor EV	2026	3	478	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1022	Tata	Tigor EV	2026	4	437	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1023	Tata	Tigor EV	2026	5	396	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
1024	Tata	Tigor EV	2026	6	361	Estimated from Official Annual	VAHAN Dashboard (Ministry of Road Transport & Highways) - Annual registrations, monthly split estimated	https://vahan.parivahan.gov.in/vahan4dashboard/
\.


--
-- Data for Name: models; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.models (model_id, brand_id, category_id, model_name, fuel_type, launch_year, discontinue_year, avg_price, is_active) FROM stdin;
1	1	1	Alto	Petrol	2000	2023	380000.00	f
2	1	1	S-Presso	Petrol	2019	2026	520000.00	t
3	1	1	Celerio	Petrol	2014	2026	550000.00	t
4	1	1	WagonR	CNG	1999	2026	620000.00	t
5	1	1	Swift	Petrol	2005	2026	750000.00	t
6	1	2	Baleno	Petrol	2015	2026	850000.00	t
7	1	1	Ignis	Petrol	2017	2026	650000.00	t
8	1	4	Dzire	Petrol	2008	2026	820000.00	t
9	1	3	Ciaz	Petrol	2014	2026	1150000.00	t
10	1	5	Brezza	Petrol	2016	2026	1100000.00	t
11	1	5	Fronx	Petrol	2023	2026	950000.00	t
12	1	6	Grand Vitara	Hybrid	2022	2026	1550000.00	t
13	1	8	Ertiga	CNG	2012	2026	1050000.00	t
14	1	8	XL6	Petrol	2019	2026	1300000.00	t
15	1	5	Jimny	Petrol	2023	2026	1400000.00	t
16	1	8	Invicto	Hybrid	2023	2026	2700000.00	t
17	2	1	Eon	Petrol	2011	2019	350000.00	f
18	2	1	Santro	Petrol	2018	2022	550000.00	f
19	2	1	Grand i10	Petrol	2013	2020	620000.00	f
20	2	1	Grand i10 Nios	Petrol	2019	2026	720000.00	t
21	2	2	i20	Petrol	2008	2026	920000.00	t
22	2	4	Aura	CNG	2020	2026	820000.00	t
23	2	4	Xcent	Petrol	2014	2020	680000.00	f
24	2	3	Verna	Petrol	2006	2026	1400000.00	t
25	2	5	Venue	Petrol	2019	2026	1050000.00	t
26	2	6	Creta	Diesel	2015	2026	1600000.00	t
27	2	7	Alcazar	Diesel	2021	2026	1950000.00	t
28	2	5	Exter	Petrol	2023	2026	780000.00	t
29	2	7	Tucson	Petrol	2005	2026	3200000.00	t
30	3	1	Nano	Petrol	2008	2019	220000.00	f
31	3	1	Bolt	Petrol	2015	2019	520000.00	f
32	3	4	Zest	Diesel	2014	2019	680000.00	f
33	3	8	Hexa	Diesel	2017	2020	1500000.00	f
34	3	1	Tiago	Petrol	2016	2026	620000.00	t
35	3	4	Tigor	Petrol	2017	2026	720000.00	t
36	3	2	Altroz	Petrol	2020	2026	880000.00	t
37	3	5	Punch	Petrol	2021	2026	760000.00	t
38	3	5	Nexon	Diesel	2017	2026	1200000.00	t
39	3	6	Harrier	Diesel	2019	2026	1950000.00	t
40	3	7	Safari	Diesel	2021	2026	2150000.00	t
41	3	6	Curvv	EV	2024	2026	1800000.00	t
42	4	1	KUV100	Petrol	2016	2021	580000.00	f
43	4	5	XUV300	Diesel	2019	2024	1100000.00	f
44	4	5	XUV 3XO	Petrol	2024	2026	1150000.00	t
45	4	7	Bolero	Diesel	2000	2026	1000000.00	t
46	4	5	Bolero Neo	Diesel	2021	2026	1080000.00	t
47	4	6	Thar	Diesel	2010	2026	1450000.00	t
48	4	7	Scorpio	Diesel	2002	2022	1350000.00	f
49	4	7	Scorpio N	Petrol	2022	2026	1850000.00	t
50	4	7	XUV500	Diesel	2011	2021	1650000.00	f
51	4	7	XUV700	Diesel	2021	2026	2000000.00	t
52	4	8	Marazzo	Diesel	2018	2024	1400000.00	f
53	5	6	Seltos	Petrol	2019	2026	1550000.00	t
54	5	5	Sonet	Petrol	2020	2026	1100000.00	t
55	5	8	Carens	Diesel	2022	2026	1300000.00	t
56	5	5	Syros	Petrol	2025	2026	1200000.00	t
57	5	8	Carnival	Diesel	2020	2026	3600000.00	t
58	5	9	EV6	EV	2022	2026	6200000.00	t
59	6	3	Etios	Diesel	2010	2020	820000.00	f
60	6	1	Etios Liva	Petrol	2011	2020	600000.00	f
61	6	3	Yaris	Petrol	2018	2021	1100000.00	f
62	6	2	Glanza	Petrol	2019	2026	850000.00	t
63	6	5	Urban Cruiser	Petrol	2020	2022	1050000.00	f
64	6	5	Taisor	Petrol	2024	2026	980000.00	t
65	6	8	Rumion	Petrol	2023	2026	1150000.00	t
66	6	8	Innova Crysta	Diesel	2016	2026	2000000.00	t
67	6	8	Innova Hycross	Hybrid	2022	2026	2600000.00	t
68	6	7	Fortuner	Diesel	2009	2026	3900000.00	t
69	6	3	Camry	Hybrid	2002	2026	4600000.00	t
70	7	1	Brio	Petrol	2011	2019	520000.00	f
71	7	2	Jazz	Petrol	2009	2023	860000.00	f
72	7	5	WR-V	Petrol	2017	2023	980000.00	f
73	7	8	Mobilio	Diesel	2014	2017	920000.00	f
74	7	4	Amaze	Petrol	2013	2026	820000.00	t
75	7	3	City	Petrol	1998	2026	1450000.00	t
76	7	6	Elevate	Petrol	2023	2026	1400000.00	t
77	8	6	Hector	Diesel	2019	2026	1750000.00	t
78	8	6	Astor	Petrol	2021	2026	1250000.00	t
79	8	7	Gloster	Diesel	2020	2026	3900000.00	t
80	8	9	Comet EV	EV	2023	2026	780000.00	t
81	8	9	ZS EV	EV	2020	2026	2300000.00	t
82	8	9	Windsor EV	EV	2024	2026	1450000.00	t
83	9	1	Kwid	Petrol	2015	2026	500000.00	t
84	9	8	Triber	Petrol	2019	2026	750000.00	t
85	9	5	Kiger	Petrol	2021	2026	850000.00	t
86	9	6	Duster	Diesel	2012	2022	1150000.00	f
87	9	8	Lodgy	Diesel	2015	2020	980000.00	f
88	9	6	Captur	Petrol	2017	2020	1250000.00	f
89	10	1	Micra	Petrol	2010	2020	620000.00	f
90	10	3	Sunny	Petrol	2011	2020	880000.00	f
91	10	6	Terrano	Diesel	2013	2020	1050000.00	f
92	10	5	Magnite	Petrol	2020	2026	820000.00	t
93	10	6	Kicks	Petrol	2019	2023	1150000.00	f
94	11	3	Rapid	Petrol	2011	2021	1000000.00	f
95	11	3	Slavia	Petrol	2022	2026	1350000.00	t
96	11	5	Kylaq	Petrol	2024	2026	980000.00	t
97	11	6	Kushaq	Petrol	2021	2026	1400000.00	t
98	11	5	Yeti	Diesel	2010	2017	1600000.00	f
99	11	3	Octavia	Petrol	2001	2023	2700000.00	f
100	11	3	Superb	Petrol	2004	2024	3300000.00	f
101	11	7	Kodiaq	Petrol	2017	2026	3900000.00	t
102	12	2	Polo	Petrol	2010	2022	820000.00	f
103	12	3	Vento	Petrol	2010	2022	1050000.00	f
104	12	3	Virtus	Petrol	2022	2026	1380000.00	t
105	12	6	Taigun	Petrol	2021	2026	1420000.00	t
106	12	7	Tiguan	Petrol	2017	2026	3500000.00	t
107	13	1	Figo	Petrol	2010	2021	620000.00	f
108	13	1	Freestyle	Petrol	2018	2021	720000.00	f
109	13	4	Aspire	Petrol	2015	2021	750000.00	f
110	13	5	EcoSport	Petrol	2013	2021	1050000.00	f
111	13	7	Endeavour	Diesel	2003	2021	3400000.00	f
112	14	1	redi-GO	Petrol	2016	2022	400000.00	f
113	14	1	GO	Petrol	2014	2022	480000.00	f
114	14	8	GO+	Petrol	2015	2022	550000.00	f
115	15	1	Beat	Petrol	2010	2017	480000.00	f
116	15	3	Sail	Petrol	2012	2017	650000.00	f
117	15	8	Enjoy	Diesel	2013	2017	720000.00	f
118	15	3	Cruze	Diesel	2009	2017	1450000.00	f
119	15	7	Trailblazer	Diesel	2015	2017	2600000.00	f
120	16	1	Punto	Petrol	2009	2019	620000.00	f
121	16	3	Linea	Petrol	2009	2019	880000.00	f
122	16	5	Avventura	Petrol	2014	2019	780000.00	f
123	17	7	Pajero Sport	Diesel	2012	2019	290000.00	f
124	17	7	Outlander	Petrol	2008	2019	320000.00	f
125	17	7	Montero	Diesel	2007	2018	680000.00	f
\.


--
-- Data for Name: sales; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sales (sale_id, model_id, sales_year, sales_month, units_sold) FROM stdin;
1	1	2016	1	14090
2	1	2016	2	13579
3	1	2016	3	15242
4	1	2016	4	13541
5	1	2016	5	12574
6	1	2016	6	14284
7	1	2016	7	13181
8	1	2016	8	15281
9	1	2016	9	13677
10	1	2016	10	16798
11	1	2016	11	14612
12	1	2016	12	11373
13	1	2017	1	14914
14	1	2017	2	13750
15	1	2017	3	15963
16	1	2017	4	12042
17	1	2017	5	12727
18	1	2017	6	13763
19	1	2017	7	13229
20	1	2017	8	14623
21	1	2017	9	13768
22	1	2017	10	15348
23	1	2017	11	15442
24	1	2017	12	12926
25	1	2018	1	15125
26	1	2018	2	13298
27	1	2018	3	14940
28	1	2018	4	13061
29	1	2018	5	13925
30	1	2018	6	13749
31	1	2018	7	13655
32	1	2018	8	15248
33	1	2018	9	14242
34	1	2018	10	14911
35	1	2018	11	15296
36	1	2018	12	12480
37	1	2019	1	15295
38	1	2019	2	13467
39	1	2019	3	15233
40	1	2019	4	12413
41	1	2019	5	12635
42	1	2019	6	13170
43	1	2019	7	13269
44	1	2019	8	15192
45	1	2019	9	16001
46	1	2019	10	16831
47	1	2019	11	14447
48	1	2019	12	11110
49	1	2020	1	9954
50	1	2020	2	9869
51	1	2020	3	11192
52	1	2020	4	9541
53	1	2020	5	10000
54	1	2020	6	9553
55	1	2020	7	9518
56	1	2020	8	11186
57	1	2020	9	9979
58	1	2020	10	11341
59	1	2020	11	11840
60	1	2020	12	8392
61	1	2021	1	13218
62	1	2021	2	11172
63	1	2021	3	13420
64	1	2021	4	10873
65	1	2021	5	11059
66	1	2021	6	11172
67	1	2021	7	12534
68	1	2021	8	12201
69	1	2021	9	12633
70	1	2021	10	15137
71	1	2021	11	12870
72	1	2021	12	9928
73	1	2022	1	10224
74	1	2022	2	9146
75	1	2022	3	10700
76	1	2022	4	8553
77	1	2022	5	9829
78	1	2022	6	8727
79	1	2022	7	9899
80	1	2022	8	10129
81	1	2022	9	10147
82	1	2022	10	10864
83	1	2022	11	10360
84	1	2022	12	7815
85	1	2023	1	10188
86	1	2023	2	9147
87	1	2023	3	10848
88	1	2023	4	9028
89	1	2023	5	9211
90	1	2023	6	8885
91	1	2023	7	9424
92	1	2023	8	10717
93	1	2023	9	10564
94	1	2023	10	11665
95	1	2023	11	10312
96	1	2023	12	8043
97	2	2019	1	4084
98	2	2019	2	3862
99	2	2019	3	4217
100	2	2019	4	3443
101	2	2019	5	3581
102	2	2019	6	3705
103	2	2019	7	3796
104	2	2019	8	3693
105	2	2019	9	3759
106	2	2019	10	4026
107	2	2019	11	3954
108	2	2019	12	3128
109	2	2020	1	2840
110	2	2020	2	2516
111	2	2020	3	3007
112	2	2020	4	2413
113	2	2020	5	2716
114	2	2020	6	2480
115	2	2020	7	2628
116	2	2020	8	2761
117	2	2020	9	2877
118	2	2020	10	3369
119	2	2020	11	3177
120	2	2020	12	2419
121	2	2021	1	3198
122	2	2021	2	3097
123	2	2021	3	3725
124	2	2021	4	2819
125	2	2021	5	3146
126	2	2021	6	3007
127	2	2021	7	3390
128	2	2021	8	3646
129	2	2021	9	3584
130	2	2021	10	3625
131	2	2021	11	3766
132	2	2021	12	3005
133	2	2022	1	2678
134	2	2022	2	2736
135	2	2022	3	2946
136	2	2022	4	2261
137	2	2022	5	2677
138	2	2022	6	2655
139	2	2022	7	2682
140	2	2022	8	2848
141	2	2022	9	3007
142	2	2022	10	3255
143	2	2022	11	3037
144	2	2022	12	2138
145	2	2023	1	2619
146	2	2023	2	2606
147	2	2023	3	2811
148	2	2023	4	2422
149	2	2023	5	2652
150	2	2023	6	2720
151	2	2023	7	2802
152	2	2023	8	2936
153	2	2023	9	2660
154	2	2023	10	3062
155	2	2023	11	2997
156	2	2023	12	2219
157	2	2024	1	3268
158	2	2024	2	2804
159	2	2024	3	3456
160	2	2024	4	2899
161	2	2024	5	3078
162	2	2024	6	2852
163	2	2024	7	3183
164	2	2024	8	3078
165	2	2024	9	3411
166	2	2024	10	3404
167	2	2024	11	3579
168	2	2024	12	2671
169	2	2025	1	3204
170	2	2025	2	2783
171	2	2025	3	3387
172	2	2025	4	2598
173	2	2025	5	2688
174	2	2025	6	2917
175	2	2025	7	3238
176	2	2025	8	3078
177	2	2025	9	3244
178	2	2025	10	3531
179	2	2025	11	3607
180	2	2025	12	2657
181	2	2026	1	3132
182	2	2026	2	3178
183	2	2026	3	3474
184	2	2026	4	2563
185	2	2026	5	2705
186	2	2026	6	2956
187	3	2016	1	3222
188	3	2016	2	3142
189	3	2016	3	3413
190	3	2016	4	2992
191	3	2016	5	3028
192	3	2016	6	3198
193	3	2016	7	3181
194	3	2016	8	3542
195	3	2016	9	3602
196	3	2016	10	3791
197	3	2016	11	3727
198	3	2016	12	2800
199	3	2017	1	3344
200	3	2017	2	3360
201	3	2017	3	3242
202	3	2017	4	2752
203	3	2017	5	3175
204	3	2017	6	3283
205	3	2017	7	3470
206	3	2017	8	3257
207	3	2017	9	3393
208	3	2017	10	3450
209	3	2017	11	3713
210	3	2017	12	2575
211	3	2018	1	3410
212	3	2018	2	3001
213	3	2018	3	3300
214	3	2018	4	2671
215	3	2018	5	2841
216	3	2018	6	2843
217	3	2018	7	3027
218	3	2018	8	3208
219	3	2018	9	3127
220	3	2018	10	3597
221	3	2018	11	3546
222	3	2018	12	2763
223	3	2019	1	3428
224	3	2019	2	3126
225	3	2019	3	3341
226	3	2019	4	3061
227	3	2019	5	2828
228	3	2019	6	3034
229	3	2019	7	3023
230	3	2019	8	3365
231	3	2019	9	3544
232	3	2019	10	3578
233	3	2019	11	3322
234	3	2019	12	2545
235	3	2020	1	2511
236	3	2020	2	2105
237	3	2020	3	2682
238	3	2020	4	1929
239	3	2020	5	2099
240	3	2020	6	2138
241	3	2020	7	2369
242	3	2020	8	2443
243	3	2020	9	2327
244	3	2020	10	2560
245	3	2020	11	2699
246	3	2020	12	1974
247	3	2021	1	2810
248	3	2021	2	2844
249	3	2021	3	3049
250	3	2021	4	2418
251	3	2021	5	2705
252	3	2021	6	2489
253	3	2021	7	2735
254	3	2021	8	2906
255	3	2021	9	2967
256	3	2021	10	3003
257	3	2021	11	3310
258	3	2021	12	2260
259	3	2022	1	2354
260	3	2022	2	2053
261	3	2022	3	2535
262	3	2022	4	1981
263	3	2022	5	2130
264	3	2022	6	2245
265	3	2022	7	2270
266	3	2022	8	2152
267	3	2022	9	2251
268	3	2022	10	2431
269	3	2022	11	2368
270	3	2022	12	1986
271	3	2023	1	2335
272	3	2023	2	2106
273	3	2023	3	2253
274	3	2023	4	1945
275	3	2023	5	2084
276	3	2023	6	2309
277	3	2023	7	2256
278	3	2023	8	2194
279	3	2023	9	2406
280	3	2023	10	2424
281	3	2023	11	2446
282	3	2023	12	1885
283	3	2024	1	2668
284	3	2024	2	2664
285	3	2024	3	2671
286	3	2024	4	2186
287	3	2024	5	2283
288	3	2024	6	2494
289	3	2024	7	2696
290	3	2024	8	2557
291	3	2024	9	2555
292	3	2024	10	2844
293	3	2024	11	2976
294	3	2024	12	2274
295	3	2025	1	2678
296	3	2025	2	2445
297	3	2025	3	2982
298	3	2025	4	2388
299	3	2025	5	2343
300	3	2025	6	2453
301	3	2025	7	2534
302	3	2025	8	2711
303	3	2025	9	2839
304	3	2025	10	2922
305	3	2025	11	2677
306	3	2025	12	2140
307	3	2026	1	2552
308	3	2026	2	2639
309	3	2026	3	2910
310	3	2026	4	2436
311	3	2026	5	2403
312	3	2026	6	2360
313	4	2016	1	13998
314	4	2016	2	15157
315	4	2016	3	15952
316	4	2016	4	13740
317	4	2016	5	13203
318	4	2016	6	14113
319	4	2016	7	15812
320	4	2016	8	15447
321	4	2016	9	16319
322	4	2016	10	16441
323	4	2016	11	17158
324	4	2016	12	11592
325	4	2017	1	15802
326	4	2017	2	14254
327	4	2017	3	15529
328	4	2017	4	12512
329	4	2017	5	13790
330	4	2017	6	13910
331	4	2017	7	15691
332	4	2017	8	15934
333	4	2017	9	15476
334	4	2017	10	15976
335	4	2017	11	16614
336	4	2017	12	12351
337	4	2018	1	15499
338	4	2018	2	13340
339	4	2018	3	16005
340	4	2018	4	12593
341	4	2018	5	13117
342	4	2018	6	12951
343	4	2018	7	13649
344	4	2018	8	14490
345	4	2018	9	15052
346	4	2018	10	16924
347	4	2018	11	15354
348	4	2018	12	12016
349	4	2019	1	14113
350	4	2019	2	14055
351	4	2019	3	14435
352	4	2019	4	13828
353	4	2019	5	13490
354	4	2019	6	14435
355	4	2019	7	14015
356	4	2019	8	14903
357	4	2019	9	15919
358	4	2019	10	17244
359	4	2019	11	16917
360	4	2019	12	12465
361	4	2020	1	9984
362	4	2020	2	9438
363	4	2020	3	10563
364	4	2020	4	9283
365	4	2020	5	10506
366	4	2020	6	9388
367	4	2020	7	9853
368	4	2020	8	10607
369	4	2020	9	11331
370	4	2020	10	11748
371	4	2020	11	11797
372	4	2020	12	8590
373	4	2021	1	13419
374	4	2021	2	11775
375	4	2021	3	13126
376	4	2021	4	11307
377	4	2021	5	11262
378	4	2021	6	12434
379	4	2021	7	13514
380	4	2021	8	12522
381	4	2021	9	13710
382	4	2021	10	15270
383	4	2021	11	13901
384	4	2021	12	11475
385	4	2022	1	9662
386	4	2022	2	10326
387	4	2022	3	11123
388	4	2022	4	8893
389	4	2022	5	9222
390	4	2022	6	10363
391	4	2022	7	9527
392	4	2022	8	10228
393	4	2022	9	10241
394	4	2022	10	11689
395	4	2022	11	11139
396	4	2022	12	8460
397	4	2023	1	9876
398	4	2023	2	10331
399	4	2023	3	10742
400	4	2023	4	9381
401	4	2023	5	9890
402	4	2023	6	9043
403	4	2023	7	9730
404	4	2023	8	10736
405	4	2023	9	11106
406	4	2023	10	12453
407	4	2023	11	11794
408	4	2023	12	8720
409	4	2024	1	11355
410	4	2024	2	12148
411	4	2024	3	13302
412	4	2024	4	11253
413	4	2024	5	11247
414	4	2024	6	10360
415	4	2024	7	10964
416	4	2024	8	11787
417	4	2024	9	11420
418	4	2024	10	13037
419	4	2024	11	12408
420	4	2024	12	9742
421	4	2025	1	12254
422	4	2025	2	10976
423	4	2025	3	12277
424	4	2025	4	11036
425	4	2025	5	11425
426	4	2025	6	11872
427	4	2025	7	12645
428	4	2025	8	12635
429	4	2025	9	12101
430	4	2025	10	12684
431	4	2025	11	13711
432	4	2025	12	10686
433	4	2026	1	11864
434	4	2026	2	11170
435	4	2026	3	13480
436	4	2026	4	10063
437	4	2026	5	11039
438	4	2026	6	10606
439	5	2016	1	13967
440	5	2016	2	12535
441	5	2016	3	15679
442	5	2016	4	11945
443	5	2016	5	13098
444	5	2016	6	13663
445	5	2016	7	13947
446	5	2016	8	14497
447	5	2016	9	13883
448	5	2016	10	15715
449	5	2016	11	14989
450	5	2016	12	12130
451	5	2017	1	14371
452	5	2017	2	14047
453	5	2017	3	15513
454	5	2017	4	12477
455	5	2017	5	12511
456	5	2017	6	12439
457	5	2017	7	12941
458	5	2017	8	14585
459	5	2017	9	14026
460	5	2017	10	16459
461	5	2017	11	14492
462	5	2017	12	11541
463	5	2018	1	14450
464	5	2018	2	13670
465	5	2018	3	15433
466	5	2018	4	11994
467	5	2018	5	13203
468	5	2018	6	12139
469	5	2018	7	14052
470	5	2018	8	12837
471	5	2018	9	14507
472	5	2018	10	15878
473	5	2018	11	13773
474	5	2018	12	11268
475	5	2019	1	12687
476	5	2019	2	13624
477	5	2019	3	13909
478	5	2019	4	12981
479	5	2019	5	11733
480	5	2019	6	13593
481	5	2019	7	12560
482	5	2019	8	14719
483	5	2019	9	14662
484	5	2019	10	15583
485	5	2019	11	15686
486	5	2019	12	11711
487	5	2020	1	9682
488	5	2020	2	9472
489	5	2020	3	11300
490	5	2020	4	8895
491	5	2020	5	8931
492	5	2020	6	9260
493	5	2020	7	10483
494	5	2020	8	9329
495	5	2020	9	9953
496	5	2020	10	10450
497	5	2020	11	11407
498	5	2020	12	7970
499	5	2021	1	12997
500	5	2021	2	12003
501	5	2021	3	12229
502	5	2021	4	9988
503	5	2021	5	10311
504	5	2021	6	11972
505	5	2021	7	12671
506	5	2021	8	12917
507	5	2021	9	11616
508	5	2021	10	13280
509	5	2021	11	13602
510	5	2021	12	10314
511	5	2022	1	9283
512	5	2022	2	8679
513	5	2022	3	9551
514	5	2022	4	8474
515	5	2022	5	8875
516	5	2022	6	9524
517	5	2022	7	9399
518	5	2022	8	8978
519	5	2022	9	10206
520	5	2022	10	10766
521	5	2022	11	10737
522	5	2022	12	7809
523	5	2023	1	8920
524	5	2023	2	9436
525	5	2023	3	10614
526	5	2023	4	7929
527	5	2023	5	9583
528	5	2023	6	8757
529	5	2023	7	9125
530	5	2023	8	10215
531	5	2023	9	10321
532	5	2023	10	10709
533	5	2023	11	11037
534	5	2023	12	7701
535	5	2024	1	10840
536	5	2024	2	9811
537	5	2024	3	11544
538	5	2024	4	10222
539	5	2024	5	9580
540	5	2024	6	10794
541	5	2024	7	11012
542	5	2024	8	10445
543	5	2024	9	12436
544	5	2024	10	12323
545	5	2024	11	11162
546	5	2024	12	8734
547	5	2025	1	11729
548	5	2025	2	10562
549	5	2025	3	10888
550	5	2025	4	9573
551	5	2025	5	10444
552	5	2025	6	9697
553	5	2025	7	11666
554	5	2025	8	11081
555	5	2025	9	11921
556	5	2025	10	13157
557	5	2025	11	12737
558	5	2025	12	8780
559	5	2026	1	11187
560	5	2026	2	11212
561	5	2026	3	12591
562	5	2026	4	9054
563	5	2026	5	10717
564	5	2026	6	10102
565	6	2016	1	14955
566	6	2016	2	14233
567	6	2016	3	14856
568	6	2016	4	12386
569	6	2016	5	14151
570	6	2016	6	13527
571	6	2016	7	13582
572	6	2016	8	14653
573	6	2016	9	14978
574	6	2016	10	16480
575	6	2016	11	15986
576	6	2016	12	12473
577	6	2017	1	14970
578	6	2017	2	14759
579	6	2017	3	15129
580	6	2017	4	13319
581	6	2017	5	12530
582	6	2017	6	14396
583	6	2017	7	13490
584	6	2017	8	14281
585	6	2017	9	14541
586	6	2017	10	15505
587	6	2017	11	15507
588	6	2017	12	11670
589	6	2018	1	13543
590	6	2018	2	14624
591	6	2018	3	15492
592	6	2018	4	12018
593	6	2018	5	12531
594	6	2018	6	13030
595	6	2018	7	14388
596	6	2018	8	13808
597	6	2018	9	15554
598	6	2018	10	17109
599	6	2018	11	16124
600	6	2018	12	11298
601	6	2019	1	13646
602	6	2019	2	13851
603	6	2019	3	14267
604	6	2019	4	12354
605	6	2019	5	13061
606	6	2019	6	13061
607	6	2019	7	15315
608	6	2019	8	15118
609	6	2019	9	15632
610	6	2019	10	15908
611	6	2019	11	15135
612	6	2019	12	11515
613	6	2020	1	10909
614	6	2020	2	10566
615	6	2020	3	11841
616	6	2020	4	9600
617	6	2020	5	9996
618	6	2020	6	9100
619	6	2020	7	9840
620	6	2020	8	11047
621	6	2020	9	10475
622	6	2020	10	12059
623	6	2020	11	11612
624	6	2020	12	8237
625	6	2021	1	12261
626	6	2021	2	11293
627	6	2021	3	12875
628	6	2021	4	10483
629	6	2021	5	12589
630	6	2021	6	11139
631	6	2021	7	12873
632	6	2021	8	13553
633	6	2021	9	12619
634	6	2021	10	15257
635	6	2021	11	14538
636	6	2021	12	10653
637	6	2022	1	10058
638	6	2022	2	9649
639	6	2022	3	10588
640	6	2022	4	8932
641	6	2022	5	8855
642	6	2022	6	9597
643	6	2022	7	10129
644	6	2022	8	10329
645	6	2022	9	11060
646	6	2022	10	12289
647	6	2022	11	10804
648	6	2022	12	8410
649	6	2023	1	9421
650	6	2023	2	10333
651	6	2023	3	10433
652	6	2023	4	8834
653	6	2023	5	9331
654	6	2023	6	9386
655	6	2023	7	9557
656	6	2023	8	9925
657	6	2023	9	10334
658	6	2023	10	11717
659	6	2023	11	11042
660	6	2023	12	8815
661	6	2024	1	11328
662	6	2024	2	10369
663	6	2024	3	12356
664	6	2024	4	9989
665	6	2024	5	10846
666	6	2024	6	11325
667	6	2024	7	11520
668	6	2024	8	12212
669	6	2024	9	12297
670	6	2024	10	12213
671	6	2024	11	13062
672	6	2024	12	10349
673	6	2025	1	11078
674	6	2025	2	10815
675	6	2025	3	12374
676	6	2025	4	11105
677	6	2025	5	10324
678	6	2025	6	11012
679	6	2025	7	12420
680	6	2025	8	11711
681	6	2025	9	11393
682	6	2025	10	12966
683	6	2025	11	12046
684	6	2025	12	10206
685	6	2026	1	11811
686	6	2026	2	10885
687	6	2026	3	11570
688	6	2026	4	10593
689	6	2026	5	10362
690	6	2026	6	11173
691	7	2017	1	1702
692	7	2017	2	1633
693	7	2017	3	2057
694	7	2017	4	1726
695	7	2017	5	1754
696	7	2017	6	1808
697	7	2017	7	1730
698	7	2017	8	1730
699	7	2017	9	1780
700	7	2017	10	1956
701	7	2017	11	1859
702	7	2017	12	1462
703	7	2018	1	1964
704	7	2018	2	1701
705	7	2018	3	1982
706	7	2018	4	1612
707	7	2018	5	1614
708	7	2018	6	1593
709	7	2018	7	1890
710	7	2018	8	1958
711	7	2018	9	1925
712	7	2018	10	2125
713	7	2018	11	2132
714	7	2018	12	1552
715	7	2019	1	1804
716	7	2019	2	1720
717	7	2019	3	1991
718	7	2019	4	1526
719	7	2019	5	1742
720	7	2019	6	1757
721	7	2019	7	1693
722	7	2019	8	1745
723	7	2019	9	1823
724	7	2019	10	2198
725	7	2019	11	1978
726	7	2019	12	1617
727	7	2020	1	1223
728	7	2020	2	1171
729	7	2020	3	1295
730	7	2020	4	1129
731	7	2020	5	1202
732	7	2020	6	1326
733	7	2020	7	1372
734	7	2020	8	1396
735	7	2020	9	1412
736	7	2020	10	1468
737	7	2020	11	1389
738	7	2020	12	1086
739	7	2021	1	1715
740	7	2021	2	1572
741	7	2021	3	1735
742	7	2021	4	1311
743	7	2021	5	1568
744	7	2021	6	1465
745	7	2021	7	1716
746	7	2021	8	1719
747	7	2021	9	1659
748	7	2021	10	1944
749	7	2021	11	1817
750	7	2021	12	1462
751	7	2022	1	1251
752	7	2022	2	1139
753	7	2022	3	1315
754	7	2022	4	1166
755	7	2022	5	1256
756	7	2022	6	1305
757	7	2022	7	1363
758	7	2022	8	1257
759	7	2022	9	1326
760	7	2022	10	1361
761	7	2022	11	1333
762	7	2022	12	1114
763	7	2023	1	1194
764	7	2023	2	1227
765	7	2023	3	1355
766	7	2023	4	1150
767	7	2023	5	1092
768	7	2023	6	1231
769	7	2023	7	1208
770	7	2023	8	1326
771	7	2023	9	1310
772	7	2023	10	1394
773	7	2023	11	1473
774	7	2023	12	1148
775	7	2024	1	1448
776	7	2024	2	1477
777	7	2024	3	1477
778	7	2024	4	1391
779	7	2024	5	1288
780	7	2024	6	1442
781	7	2024	7	1510
782	7	2024	8	1603
783	7	2024	9	1515
784	7	2024	10	1649
785	7	2024	11	1481
786	7	2024	12	1297
787	7	2025	1	1502
788	7	2025	2	1346
789	7	2025	3	1520
790	7	2025	4	1312
791	7	2025	5	1407
792	7	2025	6	1491
793	7	2025	7	1530
794	7	2025	8	1573
795	7	2025	9	1622
796	7	2025	10	1617
797	7	2025	11	1533
798	7	2025	12	1278
799	7	2026	1	1595
800	7	2026	2	1324
801	7	2026	3	1566
802	7	2026	4	1298
803	7	2026	5	1293
804	7	2026	6	1328
805	8	2016	1	11783
806	8	2016	2	11601
807	8	2016	3	14345
808	8	2016	4	12075
809	8	2016	5	10896
810	8	2016	6	11125
811	8	2016	7	12813
812	8	2016	8	12885
813	8	2016	9	14268
814	8	2016	10	13637
815	8	2016	11	14427
816	8	2016	12	10339
817	8	2017	1	12746
818	8	2017	2	12961
819	8	2017	3	12878
820	8	2017	4	10425
821	8	2017	5	11772
822	8	2017	6	11424
823	8	2017	7	11706
824	8	2017	8	12735
825	8	2017	9	13752
826	8	2017	10	15517
827	8	2017	11	13347
828	8	2017	12	10841
829	8	2018	1	11815
830	8	2018	2	12168
831	8	2018	3	14568
832	8	2018	4	12048
833	8	2018	5	12329
834	8	2018	6	12216
835	8	2018	7	11669
836	8	2018	8	13634
837	8	2018	9	14080
838	8	2018	10	14733
839	8	2018	11	14171
840	8	2018	12	10481
841	8	2019	1	12581
842	8	2019	2	12511
843	8	2019	3	13150
844	8	2019	4	11556
845	8	2019	5	11276
846	8	2019	6	11132
847	8	2019	7	13510
848	8	2019	8	12774
849	8	2019	9	14259
850	8	2019	10	15510
851	8	2019	11	13365
852	8	2019	12	10278
853	8	2020	1	9006
854	8	2020	2	8844
855	8	2020	3	9321
856	8	2020	4	7935
857	8	2020	5	8021
858	8	2020	6	8656
859	8	2020	7	8591
860	8	2020	8	9082
861	8	2020	9	9913
862	8	2020	10	11157
863	8	2020	11	10333
864	8	2020	12	7914
865	8	2021	1	10560
866	8	2021	2	10792
867	8	2021	3	11177
868	8	2021	4	9380
869	8	2021	5	9735
870	8	2021	6	10517
871	8	2021	7	11361
872	8	2021	8	10913
873	8	2021	9	11275
874	8	2021	10	13521
875	8	2021	11	12167
876	8	2021	12	9790
877	8	2022	1	8338
878	8	2022	2	8069
879	8	2022	3	9336
880	8	2022	4	7350
881	8	2022	5	8125
882	8	2022	6	8585
883	8	2022	7	8284
884	8	2022	8	9131
885	8	2022	9	8610
886	8	2022	10	9259
887	8	2022	11	9023
888	8	2022	12	7957
889	8	2023	1	8822
890	8	2023	2	8799
891	8	2023	3	9388
892	8	2023	4	8253
893	8	2023	5	8683
894	8	2023	6	8997
895	8	2023	7	8960
896	8	2023	8	8945
897	8	2023	9	8845
898	8	2023	10	10450
899	8	2023	11	9504
900	8	2023	12	7444
901	8	2024	1	10698
902	8	2024	2	9099
903	8	2024	3	11159
904	8	2024	4	8623
905	8	2024	5	8843
906	8	2024	6	9825
907	8	2024	7	9539
908	8	2024	8	10003
909	8	2024	9	10596
910	8	2024	10	10885
911	8	2024	11	10341
912	8	2024	12	8932
913	8	2025	1	10837
914	8	2025	2	9564
915	8	2025	3	11577
916	8	2025	4	9470
917	8	2025	5	8994
918	8	2025	6	10047
919	8	2025	7	9906
920	8	2025	8	10665
921	8	2025	9	11460
922	8	2025	10	11311
923	8	2025	11	11328
924	8	2025	12	8555
925	8	2026	1	10663
926	8	2026	2	9867
927	8	2026	3	11105
928	8	2026	4	9181
929	8	2026	5	9540
930	8	2026	6	9952
931	9	2016	1	1295
932	9	2016	2	1172
933	9	2016	3	1373
934	9	2016	4	1033
935	9	2016	5	1168
936	9	2016	6	1193
937	9	2016	7	1167
938	9	2016	8	1288
939	9	2016	9	1358
940	9	2016	10	1365
941	9	2016	11	1389
942	9	2016	12	1081
943	9	2017	1	1270
944	9	2017	2	1245
945	9	2017	3	1291
946	9	2017	4	1133
947	9	2017	5	1199
948	9	2017	6	1108
949	9	2017	7	1125
950	9	2017	8	1299
951	9	2017	9	1288
952	9	2017	10	1335
953	9	2017	11	1410
954	9	2017	12	950
955	9	2018	1	1192
956	9	2018	2	1114
957	9	2018	3	1379
958	9	2018	4	996
959	9	2018	5	1121
960	9	2018	6	1212
961	9	2018	7	1203
962	9	2018	8	1273
963	9	2018	9	1193
964	9	2018	10	1384
965	9	2018	11	1382
966	9	2018	12	961
967	9	2019	1	1141
968	9	2019	2	1101
969	9	2019	3	1250
970	9	2019	4	1135
971	9	2019	5	1153
972	9	2019	6	1242
973	9	2019	7	1294
974	9	2019	8	1193
975	9	2019	9	1327
976	9	2019	10	1481
977	9	2019	11	1226
978	9	2019	12	1072
979	9	2020	1	855
980	9	2020	2	835
981	9	2020	3	938
982	9	2020	4	733
983	9	2020	5	761
984	9	2020	6	792
985	9	2020	7	841
986	9	2020	8	911
987	9	2020	9	902
988	9	2020	10	977
989	9	2020	11	981
990	9	2020	12	800
991	9	2021	1	1007
992	9	2021	2	962
993	9	2021	3	1094
994	9	2021	4	933
995	9	2021	5	970
996	9	2021	6	964
997	9	2021	7	1057
998	9	2021	8	1167
999	9	2021	9	1173
1000	9	2021	10	1244
1001	9	2021	11	1125
1002	9	2021	12	854
1003	9	2022	1	1243
1004	9	2022	2	1089
1005	9	2022	3	1329
1006	9	2022	4	1122
1007	9	2022	5	1136
1008	9	2022	6	1173
1009	9	2022	7	1234
1010	9	2022	8	1215
1011	9	2022	9	1303
1012	9	2022	10	1275
1013	9	2022	11	1332
1014	9	2022	12	987
1015	9	2023	1	1248
1016	9	2023	2	1239
1017	9	2023	3	1215
1018	9	2023	4	1007
1019	9	2023	5	1096
1020	9	2023	6	1199
1021	9	2023	7	1250
1022	9	2023	8	1164
1023	9	2023	9	1356
1024	9	2023	10	1412
1025	9	2023	11	1341
1026	9	2023	12	1007
1027	9	2024	1	1319
1028	9	2024	2	1400
1029	9	2024	3	1380
1030	9	2024	4	1233
1031	9	2024	5	1193
1032	9	2024	6	1309
1033	9	2024	7	1390
1034	9	2024	8	1490
1035	9	2024	9	1348
1036	9	2024	10	1652
1037	9	2024	11	1541
1038	9	2024	12	1244
1039	9	2025	1	1397
1040	9	2025	2	1423
1041	9	2025	3	1376
1042	9	2025	4	1206
1043	9	2025	5	1307
1044	9	2025	6	1243
1045	9	2025	7	1450
1046	9	2025	8	1308
1047	9	2025	9	1533
1048	9	2025	10	1603
1049	9	2025	11	1578
1050	9	2025	12	1265
1051	9	2026	1	1409
1052	9	2026	2	1388
1053	9	2026	3	1524
1054	9	2026	4	1311
1055	9	2026	5	1267
1056	9	2026	6	1299
1057	10	2016	1	11443
1058	10	2016	2	10670
1059	10	2016	3	12125
1060	10	2016	4	10456
1061	10	2016	5	10664
1062	10	2016	6	11206
1063	10	2016	7	11277
1064	10	2016	8	11498
1065	10	2016	9	11269
1066	10	2016	10	12922
1067	10	2016	11	11825
1068	10	2016	12	10538
1069	10	2017	1	11334
1070	10	2017	2	10744
1071	10	2017	3	12291
1072	10	2017	4	10744
1073	10	2017	5	10484
1074	10	2017	6	11280
1075	10	2017	7	11990
1076	10	2017	8	12702
1077	10	2017	9	12316
1078	10	2017	10	12686
1079	10	2017	11	12346
1080	10	2017	12	9799
1081	10	2018	1	11461
1082	10	2018	2	11260
1083	10	2018	3	11793
1084	10	2018	4	9721
1085	10	2018	5	10574
1086	10	2018	6	11475
1087	10	2018	7	10991
1088	10	2018	8	11581
1089	10	2018	9	12367
1090	10	2018	10	12499
1091	10	2018	11	12302
1092	10	2018	12	9290
1093	10	2019	1	11657
1094	10	2019	2	11846
1095	10	2019	3	12303
1096	10	2019	4	10227
1097	10	2019	5	11569
1098	10	2019	6	11009
1099	10	2019	7	11553
1100	10	2019	8	11224
1101	10	2019	9	12835
1102	10	2019	10	12812
1103	10	2019	11	11907
1104	10	2019	12	9987
1105	10	2020	1	8504
1106	10	2020	2	8099
1107	10	2020	3	8772
1108	10	2020	4	7853
1109	10	2020	5	7970
1110	10	2020	6	7423
1111	10	2020	7	7821
1112	10	2020	8	7954
1113	10	2020	9	9452
1114	10	2020	10	8990
1115	10	2020	11	8964
1116	10	2020	12	7431
1117	10	2021	1	9896
1118	10	2021	2	10334
1119	10	2021	3	10315
1120	10	2021	4	9429
1121	10	2021	5	9469
1122	10	2021	6	9987
1123	10	2021	7	9917
1124	10	2021	8	10117
1125	10	2021	9	11379
1126	10	2021	10	12339
1127	10	2021	11	10306
1128	10	2021	12	9035
1129	10	2022	1	17075
1130	10	2022	2	14920
1131	10	2022	3	16253
1132	10	2022	4	14843
1133	10	2022	5	14184
1134	10	2022	6	13794
1135	10	2022	7	15009
1136	10	2022	8	15083
1137	10	2022	9	17250
1138	10	2022	10	16894
1139	10	2022	11	16250
1140	10	2022	12	12851
1141	10	2023	1	15164
1142	10	2023	2	16216
1143	10	2023	3	15616
1144	10	2023	4	13763
1145	10	2023	5	15712
1146	10	2023	6	13714
1147	10	2023	7	15448
1148	10	2023	8	15047
1149	10	2023	9	15549
1150	10	2023	10	18373
1151	10	2023	11	17509
1152	10	2023	12	13892
1153	10	2024	1	18757
1154	10	2024	2	16450
1155	10	2024	3	19495
1156	10	2024	4	16176
1157	10	2024	5	15970
1158	10	2024	6	17346
1159	10	2024	7	16974
1160	10	2024	8	16954
1161	10	2024	9	18818
1162	10	2024	10	21210
1163	10	2024	11	19310
1164	10	2024	12	14226
1165	10	2025	1	17712
1166	10	2025	2	17391
1167	10	2025	3	18842
1168	10	2025	4	15855
1169	10	2025	5	17449
1170	10	2025	6	18202
1171	10	2025	7	18155
1172	10	2025	8	19452
1173	10	2025	9	18693
1174	10	2025	10	20838
1175	10	2025	11	20295
1176	10	2025	12	15578
1177	10	2026	1	17606
1178	10	2026	2	18741
1179	10	2026	3	19083
1180	10	2026	4	15910
1181	10	2026	5	16597
1182	10	2026	6	17751
1183	11	2023	1	13017
1184	11	2023	2	12512
1185	11	2023	3	12987
1186	11	2023	4	11942
1187	11	2023	5	12783
1188	11	2023	6	11689
1189	11	2023	7	13646
1190	11	2023	8	13044
1191	11	2023	9	13981
1192	11	2023	10	15889
1193	11	2023	11	15177
1194	11	2023	12	11632
1195	11	2024	1	15700
1196	11	2024	2	14663
1197	11	2024	3	16948
1198	11	2024	4	13522
1199	11	2024	5	14111
1200	11	2024	6	14299
1201	11	2024	7	15370
1202	11	2024	8	15324
1203	11	2024	9	15945
1204	11	2024	10	17354
1205	11	2024	11	15598
1206	11	2024	12	13308
1207	11	2025	1	15734
1208	11	2025	2	13396
1209	11	2025	3	15447
1210	11	2025	4	12866
1211	11	2025	5	14814
1212	11	2025	6	13581
1213	11	2025	7	14464
1214	11	2025	8	14783
1215	11	2025	9	15503
1216	11	2025	10	18306
1217	11	2025	11	16791
1218	11	2025	12	13100
1219	11	2026	1	14959
1220	11	2026	2	13741
1221	11	2026	3	15850
1222	11	2026	4	12355
1223	11	2026	5	13928
1224	11	2026	6	14667
1225	12	2022	1	11898
1226	12	2022	2	11094
1227	12	2022	3	12165
1228	12	2022	4	10176
1229	12	2022	5	10480
1230	12	2022	6	10622
1231	12	2022	7	11469
1232	12	2022	8	11821
1233	12	2022	9	12720
1234	12	2022	10	12544
1235	12	2022	11	13538
1236	12	2022	12	9486
1237	12	2023	1	12130
1238	12	2023	2	12014
1239	12	2023	3	12405
1240	12	2023	4	10772
1241	12	2023	5	11644
1242	12	2023	6	11635
1243	12	2023	7	12498
1244	12	2023	8	12137
1245	12	2023	9	11840
1246	12	2023	10	12485
1247	12	2023	11	12724
1248	12	2023	12	9546
1249	12	2024	1	14496
1250	12	2024	2	11987
1251	12	2024	3	14449
1252	12	2024	4	11835
1253	12	2024	5	11727
1254	12	2024	6	12966
1255	12	2024	7	12794
1256	12	2024	8	14620
1257	12	2024	9	12965
1258	12	2024	10	14549
1259	12	2024	11	15202
1260	12	2024	12	11148
1261	12	2025	1	12728
1262	12	2025	2	13613
1263	12	2025	3	13456
1264	12	2025	4	11427
1265	12	2025	5	11575
1266	12	2025	6	13620
1267	12	2025	7	13925
1268	12	2025	8	14666
1269	12	2025	9	14638
1270	12	2025	10	15705
1271	12	2025	11	13551
1272	12	2025	12	11711
1273	12	2026	1	12462
1274	12	2026	2	13504
1275	12	2026	3	13617
1276	12	2026	4	11745
1277	12	2026	5	11663
1278	12	2026	6	12151
1279	13	2016	1	11303
1280	13	2016	2	10776
1281	13	2016	3	10910
1282	13	2016	4	9980
1283	13	2016	5	9193
1284	13	2016	6	10523
1285	13	2016	7	9887
1286	13	2016	8	10098
1287	13	2016	9	10636
1288	13	2016	10	11788
1289	13	2016	11	12160
1290	13	2016	12	8712
1291	13	2017	1	9992
1292	13	2017	2	10574
1293	13	2017	3	10455
1294	13	2017	4	10153
1295	13	2017	5	9843
1296	13	2017	6	10775
1297	13	2017	7	9765
1298	13	2017	8	10883
1299	13	2017	9	11017
1300	13	2017	10	11728
1301	13	2017	11	11317
1302	13	2017	12	9530
1303	13	2018	1	11454
1304	13	2018	2	10922
1305	13	2018	3	11103
1306	13	2018	4	9467
1307	13	2018	5	10615
1308	13	2018	6	9566
1309	13	2018	7	10222
1310	13	2018	8	11613
1311	13	2018	9	10576
1312	13	2018	10	11942
1313	13	2018	11	12460
1314	13	2018	12	9244
1315	13	2019	1	10174
1316	13	2019	2	9709
1317	13	2019	3	10701
1318	13	2019	4	8807
1319	13	2019	5	10065
1320	13	2019	6	10658
1321	13	2019	7	10134
1322	13	2019	8	10338
1323	13	2019	9	10595
1324	13	2019	10	13023
1325	13	2019	11	12121
1326	13	2019	12	9498
1327	13	2020	1	7799
1328	13	2020	2	7243
1329	13	2020	3	8765
1330	13	2020	4	6510
1331	13	2020	5	6576
1332	13	2020	6	7376
1333	13	2020	7	7390
1334	13	2020	8	8361
1335	13	2020	9	7656
1336	13	2020	10	9071
1337	13	2020	11	7999
1338	13	2020	12	6614
1339	13	2021	1	9106
1340	13	2021	2	9720
1341	13	2021	3	9982
1342	13	2021	4	8545
1343	13	2021	5	9072
1344	13	2021	6	9004
1345	13	2021	7	8844
1346	13	2021	8	10163
1347	13	2021	9	10167
1348	13	2021	10	10881
1349	13	2021	11	9498
1350	13	2021	12	7573
1351	13	2022	1	10092
1352	13	2022	2	9800
1353	13	2022	3	10751
1354	13	2022	4	9355
1355	13	2022	5	10072
1356	13	2022	6	9392
1357	13	2022	7	9998
1358	13	2022	8	11567
1359	13	2022	9	11390
1360	13	2022	10	11128
1361	13	2022	11	12124
1362	13	2022	12	9305
1363	13	2023	1	11127
1364	13	2023	2	9546
1365	13	2023	3	10474
1366	13	2023	4	10087
1367	13	2023	5	10479
1368	13	2023	6	9988
1369	13	2023	7	10054
1370	13	2023	8	10602
1371	13	2023	9	10315
1372	13	2023	10	11927
1373	13	2023	11	10775
1374	13	2023	12	8888
1375	13	2024	1	12337
1376	13	2024	2	11740
1377	13	2024	3	13735
1378	13	2024	4	10092
1379	13	2024	5	11246
1380	13	2024	6	11982
1381	13	2024	7	12997
1382	13	2024	8	11518
1383	13	2024	9	13595
1384	13	2024	10	13254
1385	13	2024	11	13075
1386	13	2024	12	10375
1387	13	2025	1	11953
1388	13	2025	2	11933
1389	13	2025	3	12705
1390	13	2025	4	10287
1391	13	2025	5	11247
1392	13	2025	6	11950
1393	13	2025	7	12648
1394	13	2025	8	11449
1395	13	2025	9	13701
1396	13	2025	10	13666
1397	13	2025	11	12856
1398	13	2025	12	10329
1399	13	2026	1	11573
1400	13	2026	2	11121
1401	13	2026	3	13862
1402	13	2026	4	10687
1403	13	2026	5	11737
1404	13	2026	6	11968
1405	14	2019	1	2825
1406	14	2019	2	2678
1407	14	2019	3	3028
1408	14	2019	4	2409
1409	14	2019	5	2446
1410	14	2019	6	2775
1411	14	2019	7	2715
1412	14	2019	8	3059
1413	14	2019	9	3039
1414	14	2019	10	3077
1415	14	2019	11	3243
1416	14	2019	12	2244
1417	14	2020	1	2204
1418	14	2020	2	2093
1419	14	2020	3	2253
1420	14	2020	4	1929
1421	14	2020	5	1919
1422	14	2020	6	1951
1423	14	2020	7	1918
1424	14	2020	8	2146
1425	14	2020	9	2125
1426	14	2020	10	2462
1427	14	2020	11	2329
1428	14	2020	12	1788
1429	14	2021	1	2329
1430	14	2021	2	2448
1431	14	2021	3	2537
1432	14	2021	4	2376
1433	14	2021	5	2420
1434	14	2021	6	2324
1435	14	2021	7	2380
1436	14	2021	8	2586
1437	14	2021	9	2607
1438	14	2021	10	2842
1439	14	2021	11	2621
1440	14	2021	12	2159
1441	14	2022	1	2841
1442	14	2022	2	2674
1443	14	2022	3	3097
1444	14	2022	4	2426
1445	14	2022	5	2626
1446	14	2022	6	2476
1447	14	2022	7	2811
1448	14	2022	8	2755
1449	14	2022	9	3178
1450	14	2022	10	3377
1451	14	2022	11	2847
1452	14	2022	12	2347
1453	14	2023	1	2943
1454	14	2023	2	2917
1455	14	2023	3	2790
1456	14	2023	4	2326
1457	14	2023	5	2734
1458	14	2023	6	2741
1459	14	2023	7	2957
1460	14	2023	8	2914
1461	14	2023	9	2859
1462	14	2023	10	3462
1463	14	2023	11	2845
1464	14	2023	12	2481
1465	14	2024	1	3053
1466	14	2024	2	3102
1467	14	2024	3	3258
1468	14	2024	4	2680
1469	14	2024	5	2899
1470	14	2024	6	3331
1471	14	2024	7	3263
1472	14	2024	8	3520
1473	14	2024	9	3597
1474	14	2024	10	3953
1475	14	2024	11	3394
1476	14	2024	12	2774
1477	14	2025	1	3190
1478	14	2025	2	3088
1479	14	2025	3	3281
1480	14	2025	4	2974
1481	14	2025	5	3260
1482	14	2025	6	3008
1483	14	2025	7	3226
1484	14	2025	8	3348
1485	14	2025	9	3262
1486	14	2025	10	3607
1487	14	2025	11	3656
1488	14	2025	12	2877
1489	14	2026	1	3147
1490	14	2026	2	2963
1491	14	2026	3	3630
1492	14	2026	4	2847
1493	14	2026	5	2907
1494	14	2026	6	3053
1495	15	2023	1	827
1496	15	2023	2	758
1497	15	2023	3	882
1498	15	2023	4	763
1499	15	2023	5	798
1500	15	2023	6	837
1501	15	2023	7	805
1502	15	2023	8	852
1503	15	2023	9	831
1504	15	2023	10	997
1505	15	2023	11	910
1506	15	2023	12	718
1507	15	2024	1	887
1508	15	2024	2	946
1509	15	2024	3	1013
1510	15	2024	4	792
1511	15	2024	5	870
1512	15	2024	6	832
1513	15	2024	7	874
1514	15	2024	8	1025
1515	15	2024	9	1061
1516	15	2024	10	1107
1517	15	2024	11	944
1518	15	2024	12	759
1519	15	2025	1	900
1520	15	2025	2	861
1521	15	2025	3	1002
1522	15	2025	4	849
1523	15	2025	5	892
1524	15	2025	6	957
1525	15	2025	7	982
1526	15	2025	8	1003
1527	15	2025	9	963
1528	15	2025	10	1150
1529	15	2025	11	974
1530	15	2025	12	769
1531	15	2026	1	945
1532	15	2026	2	964
1533	15	2026	3	1066
1534	15	2026	4	849
1535	15	2026	5	933
1536	15	2026	6	952
1537	16	2023	1	219
1538	16	2023	2	181
1539	16	2023	3	225
1540	16	2023	4	190
1541	16	2023	5	179
1542	16	2023	6	185
1543	16	2023	7	203
1544	16	2023	8	204
1545	16	2023	9	215
1546	16	2023	10	225
1547	16	2023	11	210
1548	16	2023	12	183
1549	16	2024	1	222
1550	16	2024	2	233
1551	16	2024	3	235
1552	16	2024	4	197
1553	16	2024	5	221
1554	16	2024	6	230
1555	16	2024	7	216
1556	16	2024	8	239
1557	16	2024	9	246
1558	16	2024	10	248
1559	16	2024	11	248
1560	16	2024	12	202
1561	16	2025	1	249
1562	16	2025	2	234
1563	16	2025	3	250
1564	16	2025	4	193
1565	16	2025	5	225
1566	16	2025	6	212
1567	16	2025	7	218
1568	16	2025	8	237
1569	16	2025	9	239
1570	16	2025	10	263
1571	16	2025	11	251
1572	16	2025	12	199
1573	16	2026	1	247
1574	16	2026	2	214
1575	16	2026	3	256
1576	16	2026	4	201
1577	16	2026	5	229
1578	16	2026	6	211
1579	17	2016	1	4653
1580	17	2016	2	4573
1581	17	2016	3	4565
1582	17	2016	4	3788
1583	17	2016	5	4193
1584	17	2016	6	4025
1585	17	2016	7	4309
1586	17	2016	8	4975
1587	17	2016	9	5081
1588	17	2016	10	5200
1589	17	2016	11	5308
1590	17	2016	12	3568
1591	17	2017	1	4525
1592	17	2017	2	4553
1593	17	2017	3	4746
1594	17	2017	4	4009
1595	17	2017	5	3914
1596	17	2017	6	4541
1597	17	2017	7	4770
1598	17	2017	8	4710
1599	17	2017	9	4581
1600	17	2017	10	5288
1601	17	2017	11	4765
1602	17	2017	12	4169
1603	17	2018	1	4743
1604	17	2018	2	4708
1605	17	2018	3	5101
1606	17	2018	4	4357
1607	17	2018	5	4529
1608	17	2018	6	4173
1609	17	2018	7	4420
1610	17	2018	8	4509
1611	17	2018	9	4651
1612	17	2018	10	4828
1613	17	2018	11	4768
1614	17	2018	12	3640
1615	17	2019	1	4635
1616	17	2019	2	4230
1617	17	2019	3	4819
1618	17	2019	4	4118
1619	17	2019	5	4079
1620	17	2019	6	4385
1621	17	2019	7	4853
1622	17	2019	8	4665
1623	17	2019	9	4815
1624	17	2019	10	5302
1625	17	2019	11	5211
1626	17	2019	12	3634
1627	18	2018	1	2248
1628	18	2018	2	2250
1629	18	2018	3	2203
1630	18	2018	4	1848
1631	18	2018	5	2034
1632	18	2018	6	2040
1633	18	2018	7	2061
1634	18	2018	8	2283
1635	18	2018	9	2358
1636	18	2018	10	2366
1637	18	2018	11	2384
1638	18	2018	12	1894
1639	18	2019	1	2218
1640	18	2019	2	2261
1641	18	2019	3	2214
1642	18	2019	4	1946
1643	18	2019	5	1908
1644	18	2019	6	2083
1645	18	2019	7	2233
1646	18	2019	8	2129
1647	18	2019	9	2183
1648	18	2019	10	2356
1649	18	2019	11	2416
1650	18	2019	12	2012
1651	18	2020	1	1504
1652	18	2020	2	1582
1653	18	2020	3	1621
1654	18	2020	4	1390
1655	18	2020	5	1548
1656	18	2020	6	1519
1657	18	2020	7	1481
1658	18	2020	8	1581
1659	18	2020	9	1717
1660	18	2020	10	1796
1661	18	2020	11	1625
1662	18	2020	12	1409
1663	18	2021	1	2114
1664	18	2021	2	1921
1665	18	2021	3	2011
1666	18	2021	4	1843
1667	18	2021	5	1934
1668	18	2021	6	1870
1669	18	2021	7	2102
1670	18	2021	8	1989
1671	18	2021	9	2188
1672	18	2021	10	2194
1673	18	2021	11	2082
1674	18	2021	12	1622
1675	18	2022	1	1445
1676	18	2022	2	1485
1677	18	2022	3	1777
1678	18	2022	4	1433
1679	18	2022	5	1549
1680	18	2022	6	1381
1681	18	2022	7	1463
1682	18	2022	8	1601
1683	18	2022	9	1621
1684	18	2022	10	1904
1685	18	2022	11	1673
1686	18	2022	12	1413
1687	19	2016	1	5781
1688	19	2016	2	4986
1689	19	2016	3	5626
1690	19	2016	4	5342
1691	19	2016	5	5451
1692	19	2016	6	5481
1693	19	2016	7	5388
1694	19	2016	8	5245
1695	19	2016	9	6167
1696	19	2016	10	6064
1697	19	2016	11	6440
1698	19	2016	12	4383
1699	19	2017	1	5399
1700	19	2017	2	5475
1701	19	2017	3	5549
1702	19	2017	4	5126
1703	19	2017	5	4841
1704	19	2017	6	4888
1705	19	2017	7	5879
1706	19	2017	8	6099
1707	19	2017	9	5691
1708	19	2017	10	6663
1709	19	2017	11	5745
1710	19	2017	12	5069
1711	19	2018	1	5467
1712	19	2018	2	5760
1713	19	2018	3	5976
1714	19	2018	4	5239
1715	19	2018	5	5051
1716	19	2018	6	5527
1717	19	2018	7	5426
1718	19	2018	8	5327
1719	19	2018	9	5711
1720	19	2018	10	5935
1721	19	2018	11	5878
1722	19	2018	12	4844
1723	19	2019	1	5839
1724	19	2019	2	5658
1725	19	2019	3	5893
1726	19	2019	4	4769
1727	19	2019	5	5170
1728	19	2019	6	5103
1729	19	2019	7	5299
1730	19	2019	8	6072
1731	19	2019	9	5931
1732	19	2019	10	6490
1733	19	2019	11	5866
1734	19	2019	12	4962
1735	19	2020	1	3811
1736	19	2020	2	3610
1737	19	2020	3	4044
1738	19	2020	4	3744
1739	19	2020	5	3775
1740	19	2020	6	4013
1741	19	2020	7	3946
1742	19	2020	8	3814
1743	19	2020	9	3962
1744	19	2020	10	4754
1745	19	2020	11	4211
1746	19	2020	12	3647
1747	20	2019	1	6908
1748	20	2019	2	6777
1749	20	2019	3	7772
1750	20	2019	4	6925
1751	20	2019	5	6246
1752	20	2019	6	7285
1753	20	2019	7	7354
1754	20	2019	8	7062
1755	20	2019	9	7232
1756	20	2019	10	7944
1757	20	2019	11	7543
1758	20	2019	12	6462
1759	20	2020	1	5445
1760	20	2020	2	4800
1761	20	2020	3	5771
1762	20	2020	4	4412
1763	20	2020	5	4696
1764	20	2020	6	4715
1765	20	2020	7	5472
1766	20	2020	8	5501
1767	20	2020	9	5858
1768	20	2020	10	5850
1769	20	2020	11	5307
1770	20	2020	12	4316
1771	20	2021	1	6308
1772	20	2021	2	6698
1773	20	2021	3	7242
1774	20	2021	4	5673
1775	20	2021	5	5652
1776	20	2021	6	5734
1777	20	2021	7	5918
1778	20	2021	8	6016
1779	20	2021	9	6272
1780	20	2021	10	7263
1781	20	2021	11	7277
1782	20	2021	12	5472
1783	20	2022	1	5007
1784	20	2022	2	4605
1785	20	2022	3	5751
1786	20	2022	4	4858
1787	20	2022	5	4506
1788	20	2022	6	4626
1789	20	2022	7	5055
1790	20	2022	8	5573
1791	20	2022	9	5321
1792	20	2022	10	6095
1793	20	2022	11	5826
1794	20	2022	12	4460
1795	20	2023	1	5288
1796	20	2023	2	4933
1797	20	2023	3	5112
1798	20	2023	4	4534
1799	20	2023	5	4784
1800	20	2023	6	5072
1801	20	2023	7	4753
1802	20	2023	8	5495
1803	20	2023	9	5017
1804	20	2023	10	5819
1805	20	2023	11	5154
1806	20	2023	12	4305
1807	20	2024	1	5790
1808	20	2024	2	5469
1809	20	2024	3	6600
1810	20	2024	4	4829
1811	20	2024	5	5427
1812	20	2024	6	5288
1813	20	2024	7	5797
1814	20	2024	8	5888
1815	20	2024	9	5661
1816	20	2024	10	6444
1817	20	2024	11	6703
1818	20	2024	12	4619
1819	20	2025	1	5651
1820	20	2025	2	5463
1821	20	2025	3	6486
1822	20	2025	4	5308
1823	20	2025	5	5376
1824	20	2025	6	5574
1825	20	2025	7	5509
1826	20	2025	8	6153
1827	20	2025	9	6398
1828	20	2025	10	7010
1829	20	2025	11	6245
1830	20	2025	12	4660
1831	20	2026	1	5591
1832	20	2026	2	5256
1833	20	2026	3	6468
1834	20	2026	4	5301
1835	20	2026	5	5513
1836	20	2026	6	5799
1837	21	2016	1	7006
1838	21	2016	2	6194
1839	21	2016	3	7398
1840	21	2016	4	5714
1841	21	2016	5	6592
1842	21	2016	6	6980
1843	21	2016	7	6379
1844	21	2016	8	7439
1845	21	2016	9	7592
1846	21	2016	10	8347
1847	21	2016	11	7836
1848	21	2016	12	5384
1849	21	2017	1	7384
1850	21	2017	2	6473
1851	21	2017	3	7348
1852	21	2017	4	5985
1853	21	2017	5	6100
1854	21	2017	6	6950
1855	21	2017	7	6445
1856	21	2017	8	6934
1857	21	2017	9	7726
1858	21	2017	10	7401
1859	21	2017	11	7879
1860	21	2017	12	6166
1861	21	2018	1	7002
1862	21	2018	2	6165
1863	21	2018	3	6964
1864	21	2018	4	6473
1865	21	2018	5	6126
1866	21	2018	6	6782
1867	21	2018	7	6869
1868	21	2018	8	7289
1869	21	2018	9	6876
1870	21	2018	10	7927
1871	21	2018	11	8013
1872	21	2018	12	5791
1873	21	2019	1	6407
1874	21	2019	2	6991
1875	21	2019	3	7205
1876	21	2019	4	6242
1877	21	2019	5	6218
1878	21	2019	6	6129
1879	21	2019	7	7174
1880	21	2019	8	7047
1881	21	2019	9	7145
1882	21	2019	10	8082
1883	21	2019	11	7051
1884	21	2019	12	5704
1885	21	2020	1	4796
1886	21	2020	2	5010
1887	21	2020	3	5634
1888	21	2020	4	4455
1889	21	2020	5	4665
1890	21	2020	6	4655
1891	21	2020	7	4813
1892	21	2020	8	4934
1893	21	2020	9	4780
1894	21	2020	10	5398
1895	21	2020	11	5600
1896	21	2020	12	3974
1897	21	2021	1	6562
1898	21	2021	2	5929
1899	21	2021	3	6095
1900	21	2021	4	5241
1901	21	2021	5	5560
1902	21	2021	6	5382
1903	21	2021	7	6445
1904	21	2021	8	6244
1905	21	2021	9	6169
1906	21	2021	10	6810
1907	21	2021	11	6734
1908	21	2021	12	5302
1909	21	2022	1	4987
1910	21	2022	2	4329
1911	21	2022	3	5000
1912	21	2022	4	3960
1913	21	2022	5	4501
1914	21	2022	6	4704
1915	21	2022	7	4892
1916	21	2022	8	4657
1917	21	2022	9	4766
1918	21	2022	10	5200
1919	21	2022	11	5325
1920	21	2022	12	4013
1921	21	2023	1	4655
1922	21	2023	2	4843
1923	21	2023	3	5079
1924	21	2023	4	4143
1925	21	2023	5	4636
1926	21	2023	6	4355
1927	21	2023	7	4769
1928	21	2023	8	5132
1929	21	2023	9	4940
1930	21	2023	10	5487
1931	21	2023	11	5243
1932	21	2023	12	4216
1933	21	2024	1	5246
1934	21	2024	2	5153
1935	21	2024	3	5974
1936	21	2024	4	4843
1937	21	2024	5	5433
1938	21	2024	6	5263
1939	21	2024	7	5952
1940	21	2024	8	5417
1941	21	2024	9	5662
1942	21	2024	10	6376
1943	21	2024	11	5980
1944	21	2024	12	4398
1945	21	2025	1	5224
1946	21	2025	2	5273
1947	21	2025	3	6140
1948	21	2025	4	4920
1949	21	2025	5	5533
1950	21	2025	6	4993
1951	21	2025	7	5440
1952	21	2025	8	5322
1953	21	2025	9	6237
1954	21	2025	10	6791
1955	21	2025	11	6403
1956	21	2025	12	4361
1957	21	2026	1	5153
1958	21	2026	2	5447
1959	21	2026	3	5734
1960	21	2026	4	4869
1961	21	2026	5	4907
1962	21	2026	6	4970
1963	22	2020	1	2994
1964	22	2020	2	2842
1965	22	2020	3	3179
1966	22	2020	4	2491
1967	22	2020	5	2664
1968	22	2020	6	2646
1969	22	2020	7	2807
1970	22	2020	8	2974
1971	22	2020	9	2767
1972	22	2020	10	3020
1973	22	2020	11	3001
1974	22	2020	12	2469
1975	22	2021	1	3209
1976	22	2021	2	3416
1977	22	2021	3	3680
1978	22	2021	4	2924
1979	22	2021	5	3383
1980	22	2021	6	3008
1981	22	2021	7	3169
1982	22	2021	8	3550
1983	22	2021	9	3368
1984	22	2021	10	3543
1985	22	2021	11	3387
1986	22	2021	12	2907
1987	22	2022	1	2595
1988	22	2022	2	2558
1989	22	2022	3	3102
1990	22	2022	4	2479
1991	22	2022	5	2508
1992	22	2022	6	2700
1993	22	2022	7	2514
1994	22	2022	8	2691
1995	22	2022	9	2751
1996	22	2022	10	3117
1997	22	2022	11	3052
1998	22	2022	12	2309
1999	22	2023	1	2854
2000	22	2023	2	2636
2001	22	2023	3	2719
2002	22	2023	4	2453
2003	22	2023	5	2497
2004	22	2023	6	2589
2005	22	2023	7	2549
2006	22	2023	8	2626
2007	22	2023	9	2884
2008	22	2023	10	2945
2009	22	2023	11	2720
2010	22	2023	12	2120
2011	22	2024	1	3333
2012	22	2024	2	2792
2013	22	2024	3	3396
2014	22	2024	4	2614
2015	22	2024	5	2984
2016	22	2024	6	3123
2017	22	2024	7	2852
2018	22	2024	8	3343
2019	22	2024	9	3451
2020	22	2024	10	3791
2021	22	2024	11	3421
2022	22	2024	12	2424
2023	22	2025	1	3031
2024	22	2025	2	3040
2025	22	2025	3	3111
2026	22	2025	4	2629
2027	22	2025	5	3014
2028	22	2025	6	2741
2029	22	2025	7	2910
2030	22	2025	8	3080
2031	22	2025	9	3179
2032	22	2025	10	3774
2033	22	2025	11	3301
2034	22	2025	12	2453
2035	22	2026	1	2947
2036	22	2026	2	3163
2037	22	2026	3	3351
2038	22	2026	4	2942
2039	22	2026	5	3008
2040	22	2026	6	3164
2041	23	2016	1	2620
2042	23	2016	2	2457
2043	23	2016	3	2386
2044	23	2016	4	2124
2045	23	2016	5	2380
2046	23	2016	6	2449
2047	23	2016	7	2516
2048	23	2016	8	2507
2049	23	2016	9	2383
2050	23	2016	10	2679
2051	23	2016	11	2735
2052	23	2016	12	2068
2053	23	2017	1	2395
2054	23	2017	2	2354
2055	23	2017	3	2766
2056	23	2017	4	2232
2057	23	2017	5	2153
2058	23	2017	6	2476
2059	23	2017	7	2535
2060	23	2017	8	2345
2061	23	2017	9	2648
2062	23	2017	10	2645
2063	23	2017	11	2450
2064	23	2017	12	2197
2065	23	2018	1	2550
2066	23	2018	2	2222
2067	23	2018	3	2463
2068	23	2018	4	2258
2069	23	2018	5	2347
2070	23	2018	6	2251
2071	23	2018	7	2510
2072	23	2018	8	2506
2073	23	2018	9	2550
2074	23	2018	10	2892
2075	23	2018	11	2706
2076	23	2018	12	1934
2077	23	2019	1	2452
2078	23	2019	2	2355
2079	23	2019	3	2527
2080	23	2019	4	2084
2081	23	2019	5	2350
2082	23	2019	6	2339
2083	23	2019	7	2459
2084	23	2019	8	2284
2085	23	2019	9	2353
2086	23	2019	10	2901
2087	23	2019	11	2432
2088	23	2019	12	2138
2089	23	2020	1	1699
2090	23	2020	2	1807
2091	23	2020	3	1944
2092	23	2020	4	1557
2093	23	2020	5	1632
2094	23	2020	6	1580
2095	23	2020	7	1759
2096	23	2020	8	1787
2097	23	2020	9	1785
2098	23	2020	10	1971
2099	23	2020	11	1806
2100	23	2020	12	1568
2101	24	2016	1	2396
2102	24	2016	2	2101
2103	24	2016	3	2442
2104	24	2016	4	1965
2105	24	2016	5	2221
2106	24	2016	6	2122
2107	24	2016	7	2248
2108	24	2016	8	2436
2109	24	2016	9	2374
2110	24	2016	10	2552
2111	24	2016	11	2305
2112	24	2016	12	1767
2113	24	2017	1	2226
2114	24	2017	2	2278
2115	24	2017	3	2362
2116	24	2017	4	1924
2117	24	2017	5	1980
2118	24	2017	6	2176
2119	24	2017	7	2323
2120	24	2017	8	2320
2121	24	2017	9	2240
2122	24	2017	10	2722
2123	24	2017	11	2328
2124	24	2017	12	2020
2125	24	2018	1	2145
2126	24	2018	2	2297
2127	24	2018	3	2321
2128	24	2018	4	2084
2129	24	2018	5	2026
2130	24	2018	6	2068
2131	24	2018	7	2355
2132	24	2018	8	2446
2133	24	2018	9	2174
2134	24	2018	10	2394
2135	24	2018	11	2563
2136	24	2018	12	1766
2137	24	2019	1	2099
2138	24	2019	2	2008
2139	24	2019	3	2261
2140	24	2019	4	2065
2141	24	2019	5	2020
2142	24	2019	6	1964
2143	24	2019	7	2272
2144	24	2019	8	2287
2145	24	2019	9	2201
2146	24	2019	10	2633
2147	24	2019	11	2474
2148	24	2019	12	2006
2149	24	2020	1	1591
2150	24	2020	2	1526
2151	24	2020	3	1577
2152	24	2020	4	1523
2153	24	2020	5	1394
2154	24	2020	6	1412
2155	24	2020	7	1557
2156	24	2020	8	1628
2157	24	2020	9	1803
2158	24	2020	10	1879
2159	24	2020	11	1685
2160	24	2020	12	1371
2161	24	2021	1	2092
2162	24	2021	2	1950
2163	24	2021	3	1936
2164	24	2021	4	1710
2165	24	2021	5	1886
2166	24	2021	6	1917
2167	24	2021	7	1810
2168	24	2021	8	1836
2169	24	2021	9	2015
2170	24	2021	10	2350
2171	24	2021	11	2254
2172	24	2021	12	1635
2173	24	2022	1	2144
2174	24	2022	2	1986
2175	24	2022	3	2270
2176	24	2022	4	2074
2177	24	2022	5	1999
2178	24	2022	6	2274
2179	24	2022	7	2146
2180	24	2022	8	2196
2181	24	2022	9	2207
2182	24	2022	10	2525
2183	24	2022	11	2262
2184	24	2022	12	1760
2185	24	2023	1	2295
2186	24	2023	2	2097
2187	24	2023	3	2478
2188	24	2023	4	1961
2189	24	2023	5	2108
2190	24	2023	6	2262
2191	24	2023	7	2262
2192	24	2023	8	2117
2193	24	2023	9	2518
2194	24	2023	10	2575
2195	24	2023	11	2239
2196	24	2023	12	2022
2197	24	2024	1	2497
2198	24	2024	2	2362
2199	24	2024	3	2564
2200	24	2024	4	2373
2201	24	2024	5	2452
2202	24	2024	6	2433
2203	24	2024	7	2421
2204	24	2024	8	2426
2205	24	2024	9	2524
2206	24	2024	10	2916
2207	24	2024	11	2561
2208	24	2024	12	2158
2209	24	2025	1	2559
2210	24	2025	2	2361
2211	24	2025	3	2521
2212	24	2025	4	2401
2213	24	2025	5	2400
2214	24	2025	6	2470
2215	24	2025	7	2472
2216	24	2025	8	2416
2217	24	2025	9	2873
2218	24	2025	10	2682
2219	24	2025	11	3000
2220	24	2025	12	2213
2221	24	2026	1	2637
2222	24	2026	2	2569
2223	24	2026	3	2789
2224	24	2026	4	2243
2225	24	2026	5	2448
2226	24	2026	6	2611
2227	25	2019	1	9139
2228	25	2019	2	9695
2229	25	2019	3	10171
2230	25	2019	4	8892
2231	25	2019	5	8739
2232	25	2019	6	8589
2233	25	2019	7	9757
2234	25	2019	8	9458
2235	25	2019	9	10221
2236	25	2019	10	11209
2237	25	2019	11	9348
2238	25	2019	12	7718
2239	25	2020	1	6637
2240	25	2020	2	6400
2241	25	2020	3	6999
2242	25	2020	4	6025
2243	25	2020	5	6440
2244	25	2020	6	6419
2245	25	2020	7	6579
2246	25	2020	8	6709
2247	25	2020	9	7486
2248	25	2020	10	8218
2249	25	2020	11	7487
2250	25	2020	12	5788
2251	25	2021	1	8772
2252	25	2021	2	7635
2253	25	2021	3	8203
2254	25	2021	4	7235
2255	25	2021	5	8095
2256	25	2021	6	8265
2257	25	2021	7	8415
2258	25	2021	8	8580
2259	25	2021	9	8505
2260	25	2021	10	8584
2261	25	2021	11	9066
2262	25	2021	12	7258
2263	25	2022	1	13170
2264	25	2022	2	11405
2265	25	2022	3	14460
2266	25	2022	4	11073
2267	25	2022	5	12081
2268	25	2022	6	11322
2269	25	2022	7	11913
2270	25	2022	8	12826
2271	25	2022	9	13093
2272	25	2022	10	13499
2273	25	2022	11	12656
2274	25	2022	12	10914
2275	25	2023	1	13545
2276	25	2023	2	13130
2277	25	2023	3	12856
2278	25	2023	4	11231
2279	25	2023	5	12172
2280	25	2023	6	11464
2281	25	2023	7	13181
2282	25	2023	8	12676
2283	25	2023	9	13836
2284	25	2023	10	14444
2285	25	2023	11	13585
2286	25	2023	12	11369
2287	25	2024	1	14176
2288	25	2024	2	14374
2289	25	2024	3	16456
2290	25	2024	4	12727
2291	25	2024	5	13758
2292	25	2024	6	12705
2293	25	2024	7	14250
2294	25	2024	8	13865
2295	25	2024	9	15127
2296	25	2024	10	15293
2297	25	2024	11	15440
2298	25	2024	12	11922
2299	25	2025	1	14662
2300	25	2025	2	12952
2301	25	2025	3	14765
2302	25	2025	4	12754
2303	25	2025	5	14479
2304	25	2025	6	13214
2305	25	2025	7	14930
2306	25	2025	8	15505
2307	25	2025	9	15924
2308	25	2025	10	15231
2309	25	2025	11	14571
2310	25	2025	12	12041
2311	25	2026	1	14152
2312	25	2026	2	14276
2313	25	2026	3	15689
2314	25	2026	4	13494
2315	25	2026	5	14168
2316	25	2026	6	14380
2317	26	2016	1	12332
2318	26	2016	2	12226
2319	26	2016	3	12702
2320	26	2016	4	10460
2321	26	2016	5	11565
2322	26	2016	6	11419
2323	26	2016	7	13618
2324	26	2016	8	12699
2325	26	2016	9	12847
2326	26	2016	10	13976
2327	26	2016	11	14731
2328	26	2016	12	10894
2329	26	2017	1	13174
2330	26	2017	2	13074
2331	26	2017	3	14240
2332	26	2017	4	11241
2333	26	2017	5	11805
2334	26	2017	6	11575
2335	26	2017	7	12719
2336	26	2017	8	13566
2337	26	2017	9	12675
2338	26	2017	10	14929
2339	26	2017	11	13449
2340	26	2017	12	11340
2341	26	2018	1	12453
2342	26	2018	2	11961
2343	26	2018	3	13351
2344	26	2018	4	10520
2345	26	2018	5	12052
2346	26	2018	6	11187
2347	26	2018	7	12726
2348	26	2018	8	13870
2349	26	2018	9	14206
2350	26	2018	10	13878
2351	26	2018	11	13352
2352	26	2018	12	10330
2353	26	2019	1	12168
2354	26	2019	2	11954
2355	26	2019	3	12863
2356	26	2019	4	11691
2357	26	2019	5	11340
2358	26	2019	6	12278
2359	26	2019	7	12552
2360	26	2019	8	12274
2361	26	2019	9	13655
2362	26	2019	10	15372
2363	26	2019	11	14247
2364	26	2019	12	10910
2365	26	2020	1	9668
2366	26	2020	2	8355
2367	26	2020	3	10416
2368	26	2020	4	8284
2369	26	2020	5	8149
2370	26	2020	6	8513
2371	26	2020	7	9131
2372	26	2020	8	8598
2373	26	2020	9	10183
2374	26	2020	10	10412
2375	26	2020	11	9800
2376	26	2020	12	7144
2377	26	2021	1	11946
2378	26	2021	2	9999
2379	26	2021	3	11399
2380	26	2021	4	10372
2381	26	2021	5	11152
2382	26	2021	6	10242
2383	26	2021	7	11562
2384	26	2021	8	11822
2385	26	2021	9	10998
2386	26	2021	10	12085
2387	26	2021	11	11639
2388	26	2021	12	9714
2389	26	2022	1	16958
2390	26	2022	2	16932
2391	26	2022	3	17245
2392	26	2022	4	15226
2393	26	2022	5	16961
2394	26	2022	6	15307
2395	26	2022	7	16409
2396	26	2022	8	16072
2397	26	2022	9	18657
2398	26	2022	10	20438
2399	26	2022	11	18958
2400	26	2022	12	14627
2401	26	2023	1	16508
2402	26	2023	2	16408
2403	26	2023	3	18020
2404	26	2023	4	15417
2405	26	2023	5	16296
2406	26	2023	6	16552
2407	26	2023	7	17991
2408	26	2023	8	17383
2409	26	2023	9	18915
2410	26	2023	10	18358
2411	26	2023	11	18994
2412	26	2023	12	15221
2413	26	2024	1	20379
2414	26	2024	2	19294
2415	26	2024	3	20492
2416	26	2024	4	16160
2417	26	2024	5	18243
2418	26	2024	6	18873
2419	26	2024	7	20023
2420	26	2024	8	21094
2421	26	2024	9	21479
2422	26	2024	10	21633
2423	26	2024	11	22682
2424	26	2024	12	17606
2425	26	2025	1	20188
2426	26	2025	2	17813
2427	26	2025	3	20324
2428	26	2025	4	17357
2429	26	2025	5	19069
2430	26	2025	6	18366
2431	26	2025	7	19604
2432	26	2025	8	18505
2433	26	2025	9	20577
2434	26	2025	10	23338
2435	26	2025	11	19862
2436	26	2025	12	15465
2437	26	2026	1	21114
2438	26	2026	2	20392
2439	26	2026	3	20020
2440	26	2026	4	18186
2441	26	2026	5	19349
2442	26	2026	6	18563
2443	27	2021	1	1211
2444	27	2021	2	1162
2445	27	2021	3	1356
2446	27	2021	4	1028
2447	27	2021	5	1127
2448	27	2021	6	1121
2449	27	2021	7	1296
2450	27	2021	8	1172
2451	27	2021	9	1336
2452	27	2021	10	1328
2453	27	2021	11	1407
2454	27	2021	12	1092
2455	27	2022	1	1777
2456	27	2022	2	1952
2457	27	2022	3	1964
2458	27	2022	4	1600
2459	27	2022	5	1655
2460	27	2022	6	1672
2461	27	2022	7	1935
2462	27	2022	8	1832
2463	27	2022	9	2105
2464	27	2022	10	2194
2465	27	2022	11	2157
2466	27	2022	12	1715
2467	27	2023	1	1800
2468	27	2023	2	1840
2469	27	2023	3	2018
2470	27	2023	4	1570
2471	27	2023	5	1671
2472	27	2023	6	1694
2473	27	2023	7	1990
2474	27	2023	8	1806
2475	27	2023	9	1893
2476	27	2023	10	2068
2477	27	2023	11	2144
2478	27	2023	12	1522
2479	27	2024	1	2045
2480	27	2024	2	2038
2481	27	2024	3	2520
2482	27	2024	4	1933
2483	27	2024	5	2149
2484	27	2024	6	2200
2485	27	2024	7	2132
2486	27	2024	8	2320
2487	27	2024	9	2433
2488	27	2024	10	2336
2489	27	2024	11	2340
2490	27	2024	12	1833
2491	27	2025	1	2380
2492	27	2025	2	2014
2493	27	2025	3	2291
2494	27	2025	4	1984
2495	27	2025	5	2158
2496	27	2025	6	1943
2497	27	2025	7	2138
2498	27	2025	8	2217
2499	27	2025	9	2380
2500	27	2025	10	2413
2501	27	2025	11	2573
2502	27	2025	12	1950
2503	27	2026	1	2073
2504	27	2026	2	2093
2505	27	2026	3	2320
2506	27	2026	4	2099
2507	27	2026	5	2175
2508	27	2026	6	2210
2509	28	2023	1	7141
2510	28	2023	2	7226
2511	28	2023	3	8524
2512	28	2023	4	6751
2513	28	2023	5	6605
2514	28	2023	6	7592
2515	28	2023	7	7254
2516	28	2023	8	7559
2517	28	2023	9	8029
2518	28	2023	10	8036
2519	28	2023	11	8463
2520	28	2023	12	5916
2521	28	2024	1	8821
2522	28	2024	2	8091
2523	28	2024	3	9433
2524	28	2024	4	8228
2525	28	2024	5	7506
2526	28	2024	6	8016
2527	28	2024	7	8096
2528	28	2024	8	8831
2529	28	2024	9	8756
2530	28	2024	10	9949
2531	28	2024	11	9521
2532	28	2024	12	6965
2533	28	2025	1	8288
2534	28	2025	2	7834
2535	28	2025	3	9348
2536	28	2025	4	7443
2537	28	2025	5	7593
2538	28	2025	6	8675
2539	28	2025	7	8100
2540	28	2025	8	8300
2541	28	2025	9	9098
2542	28	2025	10	10413
2543	28	2025	11	8844
2544	28	2025	12	7040
2545	28	2026	1	8219
2546	28	2026	2	8066
2547	28	2026	3	9948
2548	28	2026	4	7502
2549	28	2026	5	7640
2550	28	2026	6	7925
2551	29	2016	1	151
2552	29	2016	2	144
2553	29	2016	3	152
2554	29	2016	4	142
2555	29	2016	5	142
2556	29	2016	6	134
2557	29	2016	7	150
2558	29	2016	8	165
2559	29	2016	9	155
2560	29	2016	10	171
2561	29	2016	11	174
2562	29	2016	12	127
2563	29	2017	1	157
2564	29	2017	2	144
2565	29	2017	3	168
2566	29	2017	4	136
2567	29	2017	5	132
2568	29	2017	6	133
2569	29	2017	7	160
2570	29	2017	8	158
2571	29	2017	9	165
2572	29	2017	10	172
2573	29	2017	11	172
2574	29	2017	12	133
2575	29	2018	1	149
2576	29	2018	2	147
2577	29	2018	3	151
2578	29	2018	4	141
2579	29	2018	5	133
2580	29	2018	6	154
2581	29	2018	7	146
2582	29	2018	8	157
2583	29	2018	9	163
2584	29	2018	10	173
2585	29	2018	11	155
2586	29	2018	12	119
2587	29	2019	1	140
2588	29	2019	2	136
2589	29	2019	3	170
2590	29	2019	4	142
2591	29	2019	5	130
2592	29	2019	6	154
2593	29	2019	7	161
2594	29	2019	8	149
2595	29	2019	9	152
2596	29	2019	10	158
2597	29	2019	11	178
2598	29	2019	12	128
2599	29	2020	1	104
2600	29	2020	2	98
2601	29	2020	3	108
2602	29	2020	4	100
2603	29	2020	5	100
2604	29	2020	6	111
2605	29	2020	7	116
2606	29	2020	8	103
2607	29	2020	9	112
2608	29	2020	10	131
2609	29	2020	11	119
2610	29	2020	12	90
2611	29	2021	1	142
2612	29	2021	2	120
2613	29	2021	3	138
2614	29	2021	4	120
2615	29	2021	5	114
2616	29	2021	6	121
2617	29	2021	7	143
2618	29	2021	8	134
2619	29	2021	9	133
2620	29	2021	10	153
2621	29	2021	11	138
2622	29	2021	12	108
2623	29	2022	1	221
2624	29	2022	2	188
2625	29	2022	3	205
2626	29	2022	4	178
2627	29	2022	5	181
2628	29	2022	6	192
2629	29	2022	7	209
2630	29	2022	8	195
2631	29	2022	9	228
2632	29	2022	10	247
2633	29	2022	11	211
2634	29	2022	12	172
2635	29	2023	1	195
2636	29	2023	2	192
2637	29	2023	3	209
2638	29	2023	4	192
2639	29	2023	5	203
2640	29	2023	6	209
2641	29	2023	7	206
2642	29	2023	8	209
2643	29	2023	9	209
2644	29	2023	10	239
2645	29	2023	11	207
2646	29	2023	12	162
2647	29	2024	1	226
2648	29	2024	2	233
2649	29	2024	3	260
2650	29	2024	4	223
2651	29	2024	5	210
2652	29	2024	6	209
2653	29	2024	7	232
2654	29	2024	8	247
2655	29	2024	9	227
2656	29	2024	10	247
2657	29	2024	11	243
2658	29	2024	12	196
2659	29	2025	1	232
2660	29	2025	2	240
2661	29	2025	3	244
2662	29	2025	4	211
2663	29	2025	5	220
2664	29	2025	6	237
2665	29	2025	7	253
2666	29	2025	8	236
2667	29	2025	9	265
2668	29	2025	10	255
2669	29	2025	11	251
2670	29	2025	12	208
2671	29	2026	1	222
2672	29	2026	2	225
2673	29	2026	3	265
2674	29	2026	4	198
2675	29	2026	5	217
2676	29	2026	6	237
2677	30	2016	1	878
2678	30	2016	2	722
2679	30	2016	3	864
2680	30	2016	4	663
2681	30	2016	5	798
2682	30	2016	6	811
2683	30	2016	7	845
2684	30	2016	8	833
2685	30	2016	9	866
2686	30	2016	10	878
2687	30	2016	11	841
2688	30	2016	12	646
2689	30	2017	1	822
2690	30	2017	2	842
2691	30	2017	3	906
2692	30	2017	4	768
2693	30	2017	5	711
2694	30	2017	6	734
2695	30	2017	7	853
2696	30	2017	8	783
2697	30	2017	9	869
2698	30	2017	10	937
2699	30	2017	11	846
2700	30	2017	12	738
2701	30	2018	1	879
2702	30	2018	2	754
2703	30	2018	3	885
2704	30	2018	4	707
2705	30	2018	5	794
2706	30	2018	6	762
2707	30	2018	7	829
2708	30	2018	8	843
2709	30	2018	9	802
2710	30	2018	10	908
2711	30	2018	11	905
2712	30	2018	12	694
2713	30	2019	1	751
2714	30	2019	2	741
2715	30	2019	3	801
2716	30	2019	4	711
2717	30	2019	5	800
2718	30	2019	6	758
2719	30	2019	7	865
2720	30	2019	8	876
2721	30	2019	9	815
2722	30	2019	10	882
2723	30	2019	11	947
2724	30	2019	12	714
2725	31	2016	1	289
2726	31	2016	2	289
2727	31	2016	3	311
2728	31	2016	4	256
2729	31	2016	5	259
2730	31	2016	6	292
2731	31	2016	7	292
2732	31	2016	8	332
2733	31	2016	9	335
2734	31	2016	10	342
2735	31	2016	11	317
2736	31	2016	12	265
2737	31	2017	1	293
2738	31	2017	2	300
2739	31	2017	3	310
2740	31	2017	4	284
2741	31	2017	5	293
2742	31	2017	6	307
2743	31	2017	7	299
2744	31	2017	8	294
2745	31	2017	9	305
2746	31	2017	10	326
2747	31	2017	11	323
2748	31	2017	12	278
2749	31	2018	1	284
2750	31	2018	2	299
2751	31	2018	3	301
2752	31	2018	4	279
2753	31	2018	5	300
2754	31	2018	6	287
2755	31	2018	7	293
2756	31	2018	8	316
2757	31	2018	9	327
2758	31	2018	10	345
2759	31	2018	11	350
2760	31	2018	12	278
2761	31	2019	1	307
2762	31	2019	2	305
2763	31	2019	3	299
2764	31	2019	4	266
2765	31	2019	5	289
2766	31	2019	6	310
2767	31	2019	7	311
2768	31	2019	8	325
2769	31	2019	9	341
2770	31	2019	10	337
2771	31	2019	11	334
2772	31	2019	12	271
2773	32	2016	1	1243
2774	32	2016	2	1172
2775	32	2016	3	1214
2776	32	2016	4	1048
2777	32	2016	5	1056
2778	32	2016	6	1227
2779	32	2016	7	1173
2780	32	2016	8	1271
2781	32	2016	9	1180
2782	32	2016	10	1487
2783	32	2016	11	1215
2784	32	2016	12	1014
2785	32	2017	1	1287
2786	32	2017	2	1260
2787	32	2017	3	1223
2788	32	2017	4	1036
2789	32	2017	5	1048
2790	32	2017	6	1120
2791	32	2017	7	1219
2792	32	2017	8	1312
2793	32	2017	9	1220
2794	32	2017	10	1379
2795	32	2017	11	1215
2796	32	2017	12	1109
2797	32	2018	1	1211
2798	32	2018	2	1224
2799	32	2018	3	1386
2800	32	2018	4	1108
2801	32	2018	5	1129
2802	32	2018	6	1213
2803	32	2018	7	1188
2804	32	2018	8	1258
2805	32	2018	9	1363
2806	32	2018	10	1311
2807	32	2018	11	1350
2808	32	2018	12	1029
2809	32	2019	1	1306
2810	32	2019	2	1205
2811	32	2019	3	1253
2812	32	2019	4	1132
2813	32	2019	5	1055
2814	32	2019	6	1137
2815	32	2019	7	1183
2816	32	2019	8	1187
2817	32	2019	9	1327
2818	32	2019	10	1400
2819	32	2019	11	1424
2820	32	2019	12	1054
2821	33	2017	1	418
2822	33	2017	2	406
2823	33	2017	3	465
2824	33	2017	4	385
2825	33	2017	5	393
2826	33	2017	6	368
2827	33	2017	7	375
2828	33	2017	8	441
2829	33	2017	9	411
2830	33	2017	10	429
2831	33	2017	11	440
2832	33	2017	12	356
2833	33	2018	1	439
2834	33	2018	2	386
2835	33	2018	3	414
2836	33	2018	4	346
2837	33	2018	5	355
2838	33	2018	6	370
2839	33	2018	7	413
2840	33	2018	8	388
2841	33	2018	9	415
2842	33	2018	10	432
2843	33	2018	11	469
2844	33	2018	12	353
2845	33	2019	1	432
2846	33	2019	2	390
2847	33	2019	3	436
2848	33	2019	4	344
2849	33	2019	5	352
2850	33	2019	6	383
2851	33	2019	7	387
2852	33	2019	8	423
2853	33	2019	9	393
2854	33	2019	10	450
2855	33	2019	11	451
2856	33	2019	12	324
2857	33	2020	1	286
2858	33	2020	2	276
2859	33	2020	3	325
2860	33	2020	4	249
2861	33	2020	5	278
2862	33	2020	6	280
2863	33	2020	7	283
2864	33	2020	8	276
2865	33	2020	9	328
2866	33	2020	10	330
2867	33	2020	11	318
2868	33	2020	12	250
2869	34	2016	1	4507
2870	34	2016	2	5046
2871	34	2016	3	5571
2872	34	2016	4	4222
2873	34	2016	5	4613
2874	34	2016	6	4357
2875	34	2016	7	4661
2876	34	2016	8	4988
2877	34	2016	9	4715
2878	34	2016	10	5452
2879	34	2016	11	5000
2880	34	2016	12	4010
2881	34	2017	1	4732
2882	34	2017	2	4408
2883	34	2017	3	4787
2884	34	2017	4	4375
2885	34	2017	5	4448
2886	34	2017	6	4259
2887	34	2017	7	4859
2888	34	2017	8	4574
2889	34	2017	9	5276
2890	34	2017	10	5514
2891	34	2017	11	5700
2892	34	2017	12	4284
2893	34	2018	1	4621
2894	34	2018	2	4812
2895	34	2018	3	5156
2896	34	2018	4	4535
2897	34	2018	5	4365
2898	34	2018	6	4625
2899	34	2018	7	5146
2900	34	2018	8	5217
2901	34	2018	9	4834
2902	34	2018	10	5679
2903	34	2018	11	5181
2904	34	2018	12	3918
2905	34	2019	1	5035
2906	34	2019	2	4656
2907	34	2019	3	5207
2908	34	2019	4	4402
2909	34	2019	5	4246
2910	34	2019	6	4778
2911	34	2019	7	4763
2912	34	2019	8	5053
2913	34	2019	9	4714
2914	34	2019	10	5425
2915	34	2019	11	5576
2916	34	2019	12	4092
2917	34	2020	1	3796
2918	34	2020	2	3629
2919	34	2020	3	3472
2920	34	2020	4	3296
2921	34	2020	5	3373
2922	34	2020	6	3504
2923	34	2020	7	3604
2924	34	2020	8	3657
2925	34	2020	9	3549
2926	34	2020	10	3855
2927	34	2020	11	3497
2928	34	2020	12	3032
2929	34	2021	1	4345
2930	34	2021	2	3824
2931	34	2021	3	4811
2932	34	2021	4	3765
2933	34	2021	5	3915
2934	34	2021	6	4084
2935	34	2021	7	4050
2936	34	2021	8	4488
2937	34	2021	9	4793
2938	34	2021	10	5209
2939	34	2021	11	4594
2940	34	2021	12	3594
2941	34	2022	1	3413
2942	34	2022	2	3061
2943	34	2022	3	3710
2944	34	2022	4	2802
2945	34	2022	5	3099
2946	34	2022	6	3419
2947	34	2022	7	3147
2948	34	2022	8	3231
2949	34	2022	9	3626
2950	34	2022	10	3643
2951	34	2022	11	3725
2952	34	2022	12	3041
2953	34	2023	1	3685
2954	34	2023	2	3439
2955	34	2023	3	3708
2956	34	2023	4	2901
2957	34	2023	5	2972
2958	34	2023	6	3167
2959	34	2023	7	3163
2960	34	2023	8	3617
2961	34	2023	9	3556
2962	34	2023	10	3723
2963	34	2023	11	3512
2964	34	2023	12	2935
2965	34	2024	1	3783
2966	34	2024	2	3890
2967	34	2024	3	3941
2968	34	2024	4	3298
2969	34	2024	5	3591
2970	34	2024	6	3518
2971	34	2024	7	3975
2972	34	2024	8	3932
2973	34	2024	9	3825
2974	34	2024	10	4510
2975	34	2024	11	4204
2976	34	2024	12	3402
2977	34	2025	1	4191
2978	34	2025	2	3545
2979	34	2025	3	3995
2980	34	2025	4	3249
2981	34	2025	5	3517
2982	34	2025	6	3662
2983	34	2025	7	3916
2984	34	2025	8	4241
2985	34	2025	9	3832
2986	34	2025	10	4456
2987	34	2025	11	4337
2988	34	2025	12	3431
2989	34	2026	1	4062
2990	34	2026	2	3591
2991	34	2026	3	4420
2992	34	2026	4	3282
2993	34	2026	5	3782
2994	34	2026	6	3748
2995	35	2017	1	1780
2996	35	2017	2	1623
2997	35	2017	3	1923
2998	35	2017	4	1744
2999	35	2017	5	1782
3000	35	2017	6	1730
3001	35	2017	7	1747
3002	35	2017	8	1742
3003	35	2017	9	1858
3004	35	2017	10	2068
3005	35	2017	11	1844
3006	35	2017	12	1449
3007	35	2018	1	1906
3008	35	2018	2	1880
3009	35	2018	3	1972
3010	35	2018	4	1707
3011	35	2018	5	1612
3012	35	2018	6	1841
3013	35	2018	7	1818
3014	35	2018	8	1912
3015	35	2018	9	2033
3016	35	2018	10	2234
3017	35	2018	11	1937
3018	35	2018	12	1477
3019	35	2019	1	1835
3020	35	2019	2	1683
3021	35	2019	3	1980
3022	35	2019	4	1716
3023	35	2019	5	1727
3024	35	2019	6	1786
3025	35	2019	7	1779
3026	35	2019	8	1757
3027	35	2019	9	1807
3028	35	2019	10	1986
3029	35	2019	11	1875
3030	35	2019	12	1520
3031	35	2020	1	1218
3032	35	2020	2	1245
3033	35	2020	3	1466
3034	35	2020	4	1121
3035	35	2020	5	1201
3036	35	2020	6	1219
3037	35	2020	7	1230
3038	35	2020	8	1406
3039	35	2020	9	1371
3040	35	2020	10	1518
3041	35	2020	11	1439
3042	35	2020	12	1094
3043	35	2021	1	1711
3044	35	2021	2	1665
3045	35	2021	3	1664
3046	35	2021	4	1396
3047	35	2021	5	1400
3048	35	2021	6	1531
3049	35	2021	7	1534
3050	35	2021	8	1577
3051	35	2021	9	1654
3052	35	2021	10	1741
3053	35	2021	11	1796
3054	35	2021	12	1320
3055	35	2022	1	1369
3056	35	2022	2	1246
3057	35	2022	3	1341
3058	35	2022	4	1059
3059	35	2022	5	1159
3060	35	2022	6	1211
3061	35	2022	7	1223
3062	35	2022	8	1307
3063	35	2022	9	1357
3064	35	2022	10	1526
3065	35	2022	11	1293
3066	35	2022	12	1007
3067	35	2023	1	1307
3068	35	2023	2	1323
3069	35	2023	3	1428
3070	35	2023	4	1199
3071	35	2023	5	1251
3072	35	2023	6	1281
3073	35	2023	7	1227
3074	35	2023	8	1204
3075	35	2023	9	1285
3076	35	2023	10	1508
3077	35	2023	11	1469
3078	35	2023	12	1013
3079	35	2024	1	1520
3080	35	2024	2	1378
3081	35	2024	3	1641
3082	35	2024	4	1224
3083	35	2024	5	1271
3084	35	2024	6	1315
3085	35	2024	7	1460
3086	35	2024	8	1543
3087	35	2024	9	1461
3088	35	2024	10	1555
3089	35	2024	11	1560
3090	35	2024	12	1337
3091	35	2025	1	1520
3092	35	2025	2	1381
3093	35	2025	3	1446
3094	35	2025	4	1222
3095	35	2025	5	1462
3096	35	2025	6	1455
3097	35	2025	7	1558
3098	35	2025	8	1405
3099	35	2025	9	1478
3100	35	2025	10	1786
3101	35	2025	11	1503
3102	35	2025	12	1281
3103	35	2026	1	1485
3104	35	2026	2	1400
3105	35	2026	3	1491
3106	35	2026	4	1400
3107	35	2026	5	1330
3108	35	2026	6	1333
3109	36	2020	1	3171
3110	36	2020	2	3138
3111	36	2020	3	3056
3112	36	2020	4	2567
3113	36	2020	5	2974
3114	36	2020	6	2943
3115	36	2020	7	3257
3116	36	2020	8	3336
3117	36	2020	9	3196
3118	36	2020	10	3352
3119	36	2020	11	3382
3120	36	2020	12	2517
3121	36	2021	1	3853
3122	36	2021	2	3625
3123	36	2021	3	4133
3124	36	2021	4	3064
3125	36	2021	5	3514
3126	36	2021	6	3778
3127	36	2021	7	3842
3128	36	2021	8	3988
3129	36	2021	9	3809
3130	36	2021	10	3961
3131	36	2021	11	4361
3132	36	2021	12	3334
3133	36	2022	1	3150
3134	36	2022	2	3094
3135	36	2022	3	3256
3136	36	2022	4	2856
3137	36	2022	5	2614
3138	36	2022	6	2788
3139	36	2022	7	3108
3140	36	2022	8	2973
3141	36	2022	9	2912
3142	36	2022	10	3479
3143	36	2022	11	3352
3144	36	2022	12	2410
3145	36	2023	1	2986
3146	36	2023	2	2703
3147	36	2023	3	2931
3148	36	2023	4	2438
3149	36	2023	5	2725
3150	36	2023	6	2690
3151	36	2023	7	3085
3152	36	2023	8	3025
3153	36	2023	9	2982
3154	36	2023	10	3583
3155	36	2023	11	3005
3156	36	2023	12	2590
3157	36	2024	1	3334
3158	36	2024	2	3486
3159	36	2024	3	3586
3160	36	2024	4	2840
3161	36	2024	5	3240
3162	36	2024	6	3264
3163	36	2024	7	3258
3164	36	2024	8	3263
3165	36	2024	9	3451
3166	36	2024	10	4126
3167	36	2024	11	3777
3168	36	2024	12	2853
3169	36	2025	1	3465
3170	36	2025	2	3557
3171	36	2025	3	3789
3172	36	2025	4	2836
3173	36	2025	5	3404
3174	36	2025	6	3208
3175	36	2025	7	3482
3176	36	2025	8	3577
3177	36	2025	9	3593
3178	36	2025	10	4178
3179	36	2025	11	3481
3180	36	2025	12	3059
3181	36	2026	1	3411
3182	36	2026	2	3436
3183	36	2026	3	3559
3184	36	2026	4	3005
3185	36	2026	5	3306
3186	36	2026	6	3331
3187	37	2021	1	12412
3188	37	2021	2	11477
3189	37	2021	3	12424
3190	37	2021	4	10453
3191	37	2021	5	11293
3192	37	2021	6	12021
3193	37	2021	7	12413
3194	37	2021	8	12343
3195	37	2021	9	13301
3196	37	2021	10	12970
3197	37	2021	11	13363
3198	37	2021	12	10618
3199	37	2022	1	18147
3200	37	2022	2	18856
3201	37	2022	3	20145
3202	37	2022	4	16796
3203	37	2022	5	16049
3204	37	2022	6	18356
3205	37	2022	7	18714
3206	37	2022	8	19430
3207	37	2022	9	20721
3208	37	2022	10	22007
3209	37	2022	11	21580
3210	37	2022	12	15544
3211	37	2023	1	18326
3212	37	2023	2	18262
3213	37	2023	3	18978
3214	37	2023	4	17246
3215	37	2023	5	17402
3216	37	2023	6	18664
3217	37	2023	7	19835
3218	37	2023	8	18927
3219	37	2023	9	18303
3220	37	2023	10	21020
3221	37	2023	11	20783
3222	37	2023	12	16030
3223	37	2024	1	22257
3224	37	2024	2	21133
3225	37	2024	3	21153
3226	37	2024	4	17540
3227	37	2024	5	20060
3228	37	2024	6	18904
3229	37	2024	7	21910
3230	37	2024	8	23119
3231	37	2024	9	21107
3232	37	2024	10	22849
3233	37	2024	11	23253
3234	37	2024	12	16971
3235	37	2025	1	19721
3236	37	2025	2	21608
3237	37	2025	3	24322
3238	37	2025	4	17903
3239	37	2025	5	21168
3240	37	2025	6	21218
3241	37	2025	7	22820
3242	37	2025	8	22169
3243	37	2025	9	23734
3244	37	2025	10	24682
3245	37	2025	11	21571
3246	37	2025	12	17521
3247	37	2026	1	21914
3248	37	2026	2	20782
3249	37	2026	3	22508
3250	37	2026	4	18524
3251	37	2026	5	20765
3252	37	2026	6	20840
3253	38	2017	1	14076
3254	38	2017	2	11929
3255	38	2017	3	13995
3256	38	2017	4	11986
3257	38	2017	5	12732
3258	38	2017	6	12308
3259	38	2017	7	13812
3260	38	2017	8	12398
3261	38	2017	9	14249
3262	38	2017	10	13660
3263	38	2017	11	14255
3264	38	2017	12	10416
3265	38	2018	1	12608
3266	38	2018	2	12892
3267	38	2018	3	13433
3268	38	2018	4	11610
3269	38	2018	5	11821
3270	38	2018	6	12985
3271	38	2018	7	12826
3272	38	2018	8	12694
3273	38	2018	9	14273
3274	38	2018	10	15628
3275	38	2018	11	14402
3276	38	2018	12	10520
3277	38	2019	1	12150
3278	38	2019	2	11762
3279	38	2019	3	12936
3280	38	2019	4	11645
3281	38	2019	5	12355
3282	38	2019	6	12915
3283	38	2019	7	12217
3284	38	2019	8	13222
3285	38	2019	9	12804
3286	38	2019	10	13771
3287	38	2019	11	13241
3288	38	2019	12	10685
3289	38	2020	1	9963
3290	38	2020	2	9521
3291	38	2020	3	10537
3292	38	2020	4	8048
3293	38	2020	5	7979
3294	38	2020	6	9279
3295	38	2020	7	8891
3296	38	2020	8	8751
3297	38	2020	9	9400
3298	38	2020	10	10483
3299	38	2020	11	9894
3300	38	2020	12	8115
3301	38	2021	1	11209
3302	38	2021	2	11755
3303	38	2021	3	11455
3304	38	2021	4	10615
3305	38	2021	5	10732
3306	38	2021	6	11111
3307	38	2021	7	12060
3308	38	2021	8	11982
3309	38	2021	9	11263
3310	38	2021	10	13825
3311	38	2021	11	12914
3312	38	2021	12	9722
3313	38	2022	1	16392
3314	38	2022	2	16485
3315	38	2022	3	19414
3316	38	2022	4	15894
3317	38	2022	5	16982
3318	38	2022	6	16433
3319	38	2022	7	18343
3320	38	2022	8	16754
3321	38	2022	9	17470
3322	38	2022	10	20705
3323	38	2022	11	18947
3324	38	2022	12	14076
3325	38	2023	1	18560
3326	38	2023	2	17555
3327	38	2023	3	17554
3328	38	2023	4	16734
3329	38	2023	5	16438
3330	38	2023	6	17761
3331	38	2023	7	16756
3332	38	2023	8	16667
3333	38	2023	9	19054
3334	38	2023	10	21037
3335	38	2023	11	17940
3336	38	2023	12	14008
3337	38	2024	1	19548
3338	38	2024	2	18713
3339	38	2024	3	20461
3340	38	2024	4	19179
3341	38	2024	5	17699
3342	38	2024	6	20138
3343	38	2024	7	19476
3344	38	2024	8	20958
3345	38	2024	9	22666
3346	38	2024	10	24288
3347	38	2024	11	22991
3348	38	2024	12	17083
3349	38	2025	1	21209
3350	38	2025	2	18479
3351	38	2025	3	20826
3352	38	2025	4	17237
3353	38	2025	5	19402
3354	38	2025	6	20153
3355	38	2025	7	19650
3356	38	2025	8	19024
3357	38	2025	9	22124
3358	38	2025	10	22668
3359	38	2025	11	21035
3360	38	2025	12	17296
3361	38	2026	1	21340
3362	38	2026	2	18328
3363	38	2026	3	20957
3364	38	2026	4	17599
3365	38	2026	5	17523
3366	38	2026	6	18426
3367	39	2019	1	2388
3368	39	2019	2	2088
3369	39	2019	3	2541
3370	39	2019	4	1834
3371	39	2019	5	2089
3372	39	2019	6	2101
3373	39	2019	7	2285
3374	39	2019	8	2357
3375	39	2019	9	2198
3376	39	2019	10	2549
3377	39	2019	11	2327
3378	39	2019	12	1757
3379	39	2020	1	1522
3380	39	2020	2	1587
3381	39	2020	3	1612
3382	39	2020	4	1392
3383	39	2020	5	1389
3384	39	2020	6	1474
3385	39	2020	7	1647
3386	39	2020	8	1657
3387	39	2020	9	1640
3388	39	2020	10	1896
3389	39	2020	11	1827
3390	39	2020	12	1253
3391	39	2021	1	2085
3392	39	2021	2	1812
3393	39	2021	3	1941
3394	39	2021	4	1761
3395	39	2021	5	1804
3396	39	2021	6	2007
3397	39	2021	7	2073
3398	39	2021	8	1937
3399	39	2021	9	2160
3400	39	2021	10	2218
3401	39	2021	11	2006
3402	39	2021	12	1553
3403	39	2022	1	2990
3404	39	2022	2	3116
3405	39	2022	3	3285
3406	39	2022	4	2650
3407	39	2022	5	2728
3408	39	2022	6	2627
3409	39	2022	7	3033
3410	39	2022	8	3022
3411	39	2022	9	3391
3412	39	2022	10	3259
3413	39	2022	11	3522
3414	39	2022	12	2444
3415	39	2023	1	3055
3416	39	2023	2	2917
3417	39	2023	3	3196
3418	39	2023	4	2802
3419	39	2023	5	2696
3420	39	2023	6	2999
3421	39	2023	7	2795
3422	39	2023	8	3230
3423	39	2023	9	3006
3424	39	2023	10	3547
3425	39	2023	11	3472
3426	39	2023	12	2396
3427	39	2024	1	3684
3428	39	2024	2	3200
3429	39	2024	3	3660
3430	39	2024	4	3070
3431	39	2024	5	3098
3432	39	2024	6	3252
3433	39	2024	7	3268
3434	39	2024	8	3400
3435	39	2024	9	3361
3436	39	2024	10	4191
3437	39	2024	11	3682
3438	39	2024	12	2778
3439	39	2025	1	3584
3440	39	2025	2	3454
3441	39	2025	3	3597
3442	39	2025	4	3104
3443	39	2025	5	3364
3444	39	2025	6	3477
3445	39	2025	7	3659
3446	39	2025	8	3695
3447	39	2025	9	3777
3448	39	2025	10	4212
3449	39	2025	11	3580
3450	39	2025	12	2886
3451	39	2026	1	3326
3452	39	2026	2	3315
3453	39	2026	3	3433
3454	39	2026	4	3285
3455	39	2026	5	2989
3456	39	2026	6	3353
3457	40	2021	1	1629
3458	40	2021	2	1646
3459	40	2021	3	1818
3460	40	2021	4	1481
3461	40	2021	5	1428
3462	40	2021	6	1475
3463	40	2021	7	1629
3464	40	2021	8	1640
3465	40	2021	9	1674
3466	40	2021	10	1962
3467	40	2021	11	1718
3468	40	2021	12	1455
3469	40	2022	1	2396
3470	40	2022	2	2383
3471	40	2022	3	2814
3472	40	2022	4	2016
3473	40	2022	5	2102
3474	40	2022	6	2415
3475	40	2022	7	2343
3476	40	2022	8	2433
3477	40	2022	9	2380
3478	40	2022	10	2702
3479	40	2022	11	2794
3480	40	2022	12	2200
3481	40	2023	1	2644
3482	40	2023	2	2430
3483	40	2023	3	2509
3484	40	2023	4	2162
3485	40	2023	5	2381
3486	40	2023	6	2449
3487	40	2023	7	2403
3488	40	2023	8	2369
3489	40	2023	9	2493
3490	40	2023	10	2679
3491	40	2023	11	2668
3492	40	2023	12	2084
3493	40	2024	1	3053
3494	40	2024	2	2740
3495	40	2024	3	2838
3496	40	2024	4	2499
3497	40	2024	5	2497
3498	40	2024	6	2656
3499	40	2024	7	2668
3500	40	2024	8	2928
3501	40	2024	9	2950
3502	40	2024	10	3393
3503	40	2024	11	2926
3504	40	2024	12	2499
3505	40	2025	1	2731
3506	40	2025	2	2809
3507	40	2025	3	2871
3508	40	2025	4	2406
3509	40	2025	5	2560
3510	40	2025	6	2529
3511	40	2025	7	3033
3512	40	2025	8	2948
3513	40	2025	9	3092
3514	40	2025	10	3422
3515	40	2025	11	3073
3516	40	2025	12	2365
3517	40	2026	1	2911
3518	40	2026	2	2535
3519	40	2026	3	2903
3520	40	2026	4	2703
3521	40	2026	5	2453
3522	40	2026	6	2868
3523	41	2024	1	5391
3524	41	2024	2	5562
3525	41	2024	3	5513
3526	41	2024	4	5162
3527	41	2024	5	4814
3528	41	2024	6	4953
3529	41	2024	7	5339
3530	41	2024	8	5667
3531	41	2024	9	5349
3532	41	2024	10	6330
3533	41	2024	11	5766
3534	41	2024	12	4660
3535	41	2025	1	5944
3536	41	2025	2	5160
3537	41	2025	3	6307
3538	41	2025	4	4811
3539	41	2025	5	5257
3540	41	2025	6	5531
3541	41	2025	7	5593
3542	41	2025	8	5153
3543	41	2025	9	5740
3544	41	2025	10	5908
3545	41	2025	11	6241
3546	41	2025	12	4865
3547	41	2026	1	5828
3548	41	2026	2	5459
3549	41	2026	3	6052
3550	41	2026	4	4946
3551	41	2026	5	5396
3552	41	2026	6	5450
3553	42	2016	1	782
3554	42	2016	2	751
3555	42	2016	3	923
3556	42	2016	4	739
3557	42	2016	5	750
3558	42	2016	6	788
3559	42	2016	7	800
3560	42	2016	8	817
3561	42	2016	9	793
3562	42	2016	10	918
3563	42	2016	11	926
3564	42	2016	12	707
3565	42	2017	1	832
3566	42	2017	2	795
3567	42	2017	3	921
3568	42	2017	4	770
3569	42	2017	5	747
3570	42	2017	6	802
3571	42	2017	7	855
3572	42	2017	8	864
3573	42	2017	9	842
3574	42	2017	10	936
3575	42	2017	11	938
3576	42	2017	12	739
3577	42	2018	1	766
3578	42	2018	2	746
3579	42	2018	3	809
3580	42	2018	4	775
3581	42	2018	5	755
3582	42	2018	6	788
3583	42	2018	7	847
3584	42	2018	8	803
3585	42	2018	9	897
3586	42	2018	10	869
3587	42	2018	11	867
3588	42	2018	12	740
3589	42	2019	1	829
3590	42	2019	2	742
3591	42	2019	3	815
3592	42	2019	4	682
3593	42	2019	5	708
3594	42	2019	6	715
3595	42	2019	7	809
3596	42	2019	8	776
3597	42	2019	9	862
3598	42	2019	10	986
3599	42	2019	11	935
3600	42	2019	12	699
3601	42	2020	1	558
3602	42	2020	2	589
3603	42	2020	3	601
3604	42	2020	4	540
3605	42	2020	5	582
3606	42	2020	6	533
3607	42	2020	7	554
3608	42	2020	8	601
3609	42	2020	9	583
3610	42	2020	10	625
3611	42	2020	11	590
3612	42	2020	12	477
3613	42	2021	1	669
3614	42	2021	2	670
3615	42	2021	3	818
3616	42	2021	4	643
3617	42	2021	5	674
3618	42	2021	6	670
3619	42	2021	7	658
3620	42	2021	8	725
3621	42	2021	9	736
3622	42	2021	10	790
3623	42	2021	11	831
3624	42	2021	12	619
3625	43	2019	1	3900
3626	43	2019	2	3921
3627	43	2019	3	4187
3628	43	2019	4	3518
3629	43	2019	5	3720
3630	43	2019	6	3748
3631	43	2019	7	3532
3632	43	2019	8	3684
3633	43	2019	9	3793
3634	43	2019	10	4318
3635	43	2019	11	4197
3636	43	2019	12	3039
3637	43	2020	1	2794
3638	43	2020	2	2584
3639	43	2020	3	3024
3640	43	2020	4	2301
3641	43	2020	5	2515
3642	43	2020	6	2512
3643	43	2020	7	2901
3644	43	2020	8	3022
3645	43	2020	9	3064
3646	43	2020	10	2907
3647	43	2020	11	2827
3648	43	2020	12	2395
3649	43	2021	1	3624
3650	43	2021	2	3151
3651	43	2021	3	3396
3652	43	2021	4	2913
3653	43	2021	5	3126
3654	43	2021	6	3215
3655	43	2021	7	3521
3656	43	2021	8	3582
3657	43	2021	9	3751
3658	43	2021	10	3642
3659	43	2021	11	3540
3660	43	2021	12	2792
3661	43	2022	1	4820
3662	43	2022	2	4758
3663	43	2022	3	5674
3664	43	2022	4	4477
3665	43	2022	5	4639
3666	43	2022	6	4726
3667	43	2022	7	5587
3668	43	2022	8	5445
3669	43	2022	9	5452
3670	43	2022	10	5452
3671	43	2022	11	5829
3672	43	2022	12	4488
3673	43	2023	1	5094
3674	43	2023	2	5264
3675	43	2023	3	5114
3676	43	2023	4	4305
3677	43	2023	5	5083
3678	43	2023	6	5051
3679	43	2023	7	5284
3680	43	2023	8	5349
3681	43	2023	9	5801
3682	43	2023	10	6338
3683	43	2023	11	5580
3684	43	2023	12	4602
3685	43	2024	1	6280
3686	43	2024	2	5532
3687	43	2024	3	5953
3688	43	2024	4	5488
3689	43	2024	5	5429
3690	43	2024	6	5617
3691	43	2024	7	6407
3692	43	2024	8	5953
3693	43	2024	9	6681
3694	43	2024	10	6884
3695	43	2024	11	6402
3696	43	2024	12	4709
3697	44	2024	1	11737
3698	44	2024	2	12163
3699	44	2024	3	12999
3700	44	2024	4	11071
3701	44	2024	5	10752
3702	44	2024	6	10570
3703	44	2024	7	11446
3704	44	2024	8	12260
3705	44	2024	9	11523
3706	44	2024	10	14157
3707	44	2024	11	13811
3708	44	2024	12	10261
3709	44	2025	1	11355
3710	44	2025	2	11499
3711	44	2025	3	12369
3712	44	2025	4	9767
3713	44	2025	5	11626
3714	44	2025	6	11334
3715	44	2025	7	10851
3716	44	2025	8	12107
3717	44	2025	9	11935
3718	44	2025	10	12581
3719	44	2025	11	11815
3720	44	2025	12	9735
3721	44	2026	1	12644
3722	44	2026	2	12066
3723	44	2026	3	12918
3724	44	2026	4	10775
3725	44	2026	5	10979
3726	44	2026	6	10513
3727	45	2016	1	7865
3728	45	2016	2	7043
3729	45	2016	3	7934
3730	45	2016	4	6460
3731	45	2016	5	6497
3732	45	2016	6	6896
3733	45	2016	7	8140
3734	45	2016	8	7569
3735	45	2016	9	7792
3736	45	2016	10	9130
3737	45	2016	11	7888
3738	45	2016	12	6730
3739	45	2017	1	7833
3740	45	2017	2	7650
3741	45	2017	3	8293
3742	45	2017	4	7001
3743	45	2017	5	7545
3744	45	2017	6	7575
3745	45	2017	7	7372
3746	45	2017	8	7339
3747	45	2017	9	7368
3748	45	2017	10	8383
3749	45	2017	11	7998
3750	45	2017	12	6842
3751	45	2018	1	7809
3752	45	2018	2	7812
3753	45	2018	3	8223
3754	45	2018	4	7012
3755	45	2018	5	7493
3756	45	2018	6	7005
3757	45	2018	7	7727
3758	45	2018	8	7454
3759	45	2018	9	7370
3760	45	2018	10	8568
3761	45	2018	11	7918
3762	45	2018	12	6569
3763	45	2019	1	7860
3764	45	2019	2	7283
3765	45	2019	3	8208
3766	45	2019	4	6278
3767	45	2019	5	7097
3768	45	2019	6	6735
3769	45	2019	7	8157
3770	45	2019	8	8228
3771	45	2019	9	8547
3772	45	2019	10	8502
3773	45	2019	11	8132
3774	45	2019	12	6914
3775	45	2020	1	5107
3776	45	2020	2	5092
3777	45	2020	3	5625
3778	45	2020	4	4614
3779	45	2020	5	4851
3780	45	2020	6	5213
3781	45	2020	7	5476
3782	45	2020	8	5645
3783	45	2020	9	5319
3784	45	2020	10	6618
3785	45	2020	11	5579
3786	45	2020	12	4420
3787	45	2021	1	7182
3788	45	2021	2	6669
3789	45	2021	3	7331
3790	45	2021	4	6347
3791	45	2021	5	6250
3792	45	2021	6	6493
3793	45	2021	7	6219
3794	45	2021	8	7045
3795	45	2021	9	6890
3796	45	2021	10	7916
3797	45	2021	11	7325
3798	45	2021	12	5242
3799	45	2022	1	10689
3800	45	2022	2	9612
3801	45	2022	3	11343
3802	45	2022	4	8954
3803	45	2022	5	9415
3804	45	2022	6	9015
3805	45	2022	7	9857
3806	45	2022	8	10310
3807	45	2022	9	11040
3808	45	2022	10	11561
3809	45	2022	11	10738
3810	45	2022	12	8595
3811	45	2023	1	10315
3812	45	2023	2	9306
3813	45	2023	3	10120
3814	45	2023	4	8835
3815	45	2023	5	9943
3816	45	2023	6	9029
3817	45	2023	7	10411
3818	45	2023	8	11090
3819	45	2023	9	11143
3820	45	2023	10	10742
3821	45	2023	11	11437
3822	45	2023	12	8483
3823	45	2024	1	11392
3824	45	2024	2	10644
3825	45	2024	3	12388
3826	45	2024	4	10802
3827	45	2024	5	11730
3828	45	2024	6	11847
3829	45	2024	7	12268
3830	45	2024	8	12512
3831	45	2024	9	12918
3832	45	2024	10	13509
3833	45	2024	11	11897
3834	45	2024	12	9964
3835	45	2025	1	12132
3836	45	2025	2	10947
3837	45	2025	3	13381
3838	45	2025	4	9692
3839	45	2025	5	10956
3840	45	2025	6	11698
3841	45	2025	7	12373
3842	45	2025	8	12835
3843	45	2025	9	12348
3844	45	2025	10	13180
3845	45	2025	11	11920
3846	45	2025	12	10332
3847	45	2026	1	11584
3848	45	2026	2	11269
3849	45	2026	3	11664
3850	45	2026	4	10962
3851	45	2026	5	10777
3852	45	2026	6	11013
3853	46	2021	1	2112
3854	46	2021	2	1883
3855	46	2021	3	2189
3856	46	2021	4	1709
3857	46	2021	5	1905
3858	46	2021	6	1922
3859	46	2021	7	1990
3860	46	2021	8	2037
3861	46	2021	9	2175
3862	46	2021	10	2175
3863	46	2021	11	2033
3864	46	2021	12	1669
3865	46	2022	1	3142
3866	46	2022	2	2980
3867	46	2022	3	3015
3868	46	2022	4	2480
3869	46	2022	5	3010
3870	46	2022	6	2733
3871	46	2022	7	2852
3872	46	2022	8	2824
3873	46	2022	9	3039
3874	46	2022	10	3429
3875	46	2022	11	3487
3876	46	2022	12	2686
3877	46	2023	1	2898
3878	46	2023	2	2896
3879	46	2023	3	3043
3880	46	2023	4	2537
3881	46	2023	5	2660
3882	46	2023	6	2700
3883	46	2023	7	3104
3884	46	2023	8	3293
3885	46	2023	9	3181
3886	46	2023	10	3430
3887	46	2023	11	3120
3888	46	2023	12	2409
3889	46	2024	1	3663
3890	46	2024	2	3609
3891	46	2024	3	3828
3892	46	2024	4	3051
3893	46	2024	5	3038
3894	46	2024	6	3312
3895	46	2024	7	3502
3896	46	2024	8	3709
3897	46	2024	9	3403
3898	46	2024	10	3926
3899	46	2024	11	3680
3900	46	2024	12	3038
3901	46	2025	1	3290
3902	46	2025	2	3229
3903	46	2025	3	3819
3904	46	2025	4	3234
3905	46	2025	5	3092
3906	46	2025	6	3178
3907	46	2025	7	3633
3908	46	2025	8	3536
3909	46	2025	9	3647
3910	46	2025	10	3936
3911	46	2025	11	3812
3912	46	2025	12	3101
3913	46	2026	1	3255
3914	46	2026	2	3097
3915	46	2026	3	3978
3916	46	2026	4	3301
3917	46	2026	5	2978
3918	46	2026	6	3029
3919	47	2016	1	4810
3920	47	2016	2	4079
3921	47	2016	3	4542
3922	47	2016	4	4068
3923	47	2016	5	4304
3924	47	2016	6	4030
3925	47	2016	7	4251
3926	47	2016	8	4822
3927	47	2016	9	4675
3928	47	2016	10	4937
3929	47	2016	11	5304
3930	47	2016	12	3669
3931	47	2017	1	4474
3932	47	2017	2	4603
3933	47	2017	3	4552
3934	47	2017	4	4359
3935	47	2017	5	3959
3936	47	2017	6	4190
3937	47	2017	7	4653
3938	47	2017	8	4631
3939	47	2017	9	4721
3940	47	2017	10	5471
3941	47	2017	11	4782
3942	47	2017	12	3772
3943	47	2018	1	4361
3944	47	2018	2	4472
3945	47	2018	3	4557
3946	47	2018	4	4029
3947	47	2018	5	4527
3948	47	2018	6	4015
3949	47	2018	7	4575
3950	47	2018	8	4790
3951	47	2018	9	4392
3952	47	2018	10	5503
3953	47	2018	11	5096
3954	47	2018	12	3810
3955	47	2019	1	4627
3956	47	2019	2	4625
3957	47	2019	3	5185
3958	47	2019	4	4132
3959	47	2019	5	4137
3960	47	2019	6	4272
3961	47	2019	7	4314
3962	47	2019	8	4508
3963	47	2019	9	4773
3964	47	2019	10	4922
3965	47	2019	11	4976
3966	47	2019	12	3764
3967	47	2020	1	3214
3968	47	2020	2	3149
3969	47	2020	3	3361
3970	47	2020	4	2849
3971	47	2020	5	3169
3972	47	2020	6	2942
3973	47	2020	7	3143
3974	47	2020	8	3429
3975	47	2020	9	3438
3976	47	2020	10	3895
3977	47	2020	11	3491
3978	47	2020	12	2741
3979	47	2021	1	3954
3980	47	2021	2	3650
3981	47	2021	3	4058
3982	47	2021	4	3332
3983	47	2021	5	3458
3984	47	2021	6	3630
3985	47	2021	7	3881
3986	47	2021	8	4050
3987	47	2021	9	4148
3988	47	2021	10	4825
3989	47	2021	11	4555
3990	47	2021	12	3180
3991	47	2022	1	5936
3992	47	2022	2	6314
3993	47	2022	3	6094
3994	47	2022	4	5341
3995	47	2022	5	5307
3996	47	2022	6	5541
3997	47	2022	7	6520
3998	47	2022	8	6100
3999	47	2022	9	6166
4000	47	2022	10	7163
4001	47	2022	11	6504
4002	47	2022	12	5216
4003	47	2023	1	6242
4004	47	2023	2	5618
4005	47	2023	3	6807
4006	47	2023	4	5523
4007	47	2023	5	5257
4008	47	2023	6	5935
4009	47	2023	7	6014
4010	47	2023	8	6743
4011	47	2023	9	6532
4012	47	2023	10	7351
4013	47	2023	11	6234
4014	47	2023	12	5016
4015	47	2024	1	7071
4016	47	2024	2	6617
4017	47	2024	3	7328
4018	47	2024	4	5921
4019	47	2024	5	7043
4020	47	2024	6	6491
4021	47	2024	7	7030
4022	47	2024	8	7175
4023	47	2024	9	7118
4024	47	2024	10	7837
4025	47	2024	11	7645
4026	47	2024	12	5724
4027	47	2025	1	7440
4028	47	2025	2	6647
4029	47	2025	3	7652
4030	47	2025	4	6693
4031	47	2025	5	6743
4032	47	2025	6	6838
4033	47	2025	7	7399
4034	47	2025	8	7037
4035	47	2025	9	7449
4036	47	2025	10	8650
4037	47	2025	11	7130
4038	47	2025	12	5800
4039	47	2026	1	6634
4040	47	2026	2	7318
4041	47	2026	3	7088
4042	47	2026	4	6403
4043	47	2026	5	6991
4044	47	2026	6	7219
4045	48	2016	1	5335
4046	48	2016	2	5448
4047	48	2016	3	6123
4048	48	2016	4	5228
4049	48	2016	5	5477
4050	48	2016	6	5577
4051	48	2016	7	5270
4052	48	2016	8	5744
4053	48	2016	9	5939
4054	48	2016	10	6702
4055	48	2016	11	6035
4056	48	2016	12	4478
4057	48	2017	1	5965
4058	48	2017	2	5059
4059	48	2017	3	5910
4060	48	2017	4	4877
4061	48	2017	5	5540
4062	48	2017	6	5112
4063	48	2017	7	5578
4064	48	2017	8	5549
4065	48	2017	9	6038
4066	48	2017	10	6779
4067	48	2017	11	5711
4068	48	2017	12	4707
4069	48	2018	1	5450
4070	48	2018	2	4968
4071	48	2018	3	6128
4072	48	2018	4	4669
4073	48	2018	5	4799
4074	48	2018	6	5232
4075	48	2018	7	5981
4076	48	2018	8	5859
4077	48	2018	9	6214
4078	48	2018	10	6128
4079	48	2018	11	6250
4080	48	2018	12	4402
4081	48	2019	1	5850
4082	48	2019	2	5714
4083	48	2019	3	5904
4084	48	2019	4	4978
4085	48	2019	5	4757
4086	48	2019	6	5497
4087	48	2019	7	5278
4088	48	2019	8	6083
4089	48	2019	9	5626
4090	48	2019	10	6618
4091	48	2019	11	5818
4092	48	2019	12	4651
4093	48	2020	1	4259
4094	48	2020	2	3748
4095	48	2020	3	4599
4096	48	2020	4	3786
4097	48	2020	5	3834
4098	48	2020	6	3516
4099	48	2020	7	3866
4100	48	2020	8	3959
4101	48	2020	9	4120
4102	48	2020	10	4741
4103	48	2020	11	4224
4104	48	2020	12	3540
4105	48	2021	1	5146
4106	48	2021	2	4416
4107	48	2021	3	5035
4108	48	2021	4	4325
4109	48	2021	5	4586
4110	48	2021	6	4727
4111	48	2021	7	5142
4112	48	2021	8	4661
4113	48	2021	9	5010
4114	48	2021	10	5513
4115	48	2021	11	5490
4116	48	2021	12	4494
4117	48	2022	1	7350
4118	48	2022	2	7516
4119	48	2022	3	7713
4120	48	2022	4	6871
4121	48	2022	5	7206
4122	48	2022	6	7482
4123	48	2022	7	7168
4124	48	2022	8	7434
4125	48	2022	9	7897
4126	48	2022	10	9153
4127	48	2022	11	8411
4128	48	2022	12	6497
4129	49	2022	1	8811
4130	49	2022	2	9693
4131	49	2022	3	10131
4132	49	2022	4	8108
4133	49	2022	5	8618
4134	49	2022	6	8533
4135	49	2022	7	9397
4136	49	2022	8	9586
4137	49	2022	9	10357
4138	49	2022	10	9987
4139	49	2022	11	9449
4140	49	2022	12	8375
4141	49	2023	1	9710
4142	49	2023	2	9109
4143	49	2023	3	10413
4144	49	2023	4	7726
4145	49	2023	5	8263
4146	49	2023	6	9390
4147	49	2023	7	9561
4148	49	2023	8	8737
4149	49	2023	9	9731
4150	49	2023	10	10438
4151	49	2023	11	10014
4152	49	2023	12	7785
4153	49	2024	1	11022
4154	49	2024	2	9684
4155	49	2024	3	11973
4156	49	2024	4	9350
4157	49	2024	5	10715
4158	49	2024	6	9939
4159	49	2024	7	11179
4160	49	2024	8	10350
4161	49	2024	9	10340
4162	49	2024	10	12485
4163	49	2024	11	11764
4164	49	2024	12	8429
4165	49	2025	1	10077
4166	49	2025	2	10492
4167	49	2025	3	10771
4168	49	2025	4	9856
4169	49	2025	5	10650
4170	49	2025	6	10944
4171	49	2025	7	10862
4172	49	2025	8	10232
4173	49	2025	9	11925
4174	49	2025	10	11786
4175	49	2025	11	11240
4176	49	2025	12	9784
4177	49	2026	1	10677
4178	49	2026	2	9530
4179	49	2026	3	10885
4180	49	2026	4	8984
4181	49	2026	5	10099
4182	49	2026	6	9683
4183	50	2016	1	1864
4184	50	2016	2	1750
4185	50	2016	3	1835
4186	50	2016	4	1697
4187	50	2016	5	1767
4188	50	2016	6	1607
4189	50	2016	7	1708
4190	50	2016	8	1764
4191	50	2016	9	1939
4192	50	2016	10	2148
4193	50	2016	11	2098
4194	50	2016	12	1583
4195	50	2017	1	1949
4196	50	2017	2	1826
4197	50	2017	3	1994
4198	50	2017	4	1727
4199	50	2017	5	1773
4200	50	2017	6	1742
4201	50	2017	7	1764
4202	50	2017	8	1927
4203	50	2017	9	1850
4204	50	2017	10	1951
4205	50	2017	11	2071
4206	50	2017	12	1459
4207	50	2018	1	1910
4208	50	2018	2	1729
4209	50	2018	3	2084
4210	50	2018	4	1720
4211	50	2018	5	1756
4212	50	2018	6	1709
4213	50	2018	7	1722
4214	50	2018	8	1820
4215	50	2018	9	2026
4216	50	2018	10	2076
4217	50	2018	11	1966
4218	50	2018	12	1584
4219	50	2019	1	1728
4220	50	2019	2	1630
4221	50	2019	3	1854
4222	50	2019	4	1517
4223	50	2019	5	1759
4224	50	2019	6	1610
4225	50	2019	7	1933
4226	50	2019	8	1993
4227	50	2019	9	1808
4228	50	2019	10	2039
4229	50	2019	11	2033
4230	50	2019	12	1562
4231	50	2020	1	1227
4232	50	2020	2	1331
4233	50	2020	3	1332
4234	50	2020	4	1254
4235	50	2020	5	1170
4236	50	2020	6	1340
4237	50	2020	7	1361
4238	50	2020	8	1324
4239	50	2020	9	1334
4240	50	2020	10	1522
4241	50	2020	11	1372
4242	50	2020	12	1083
4243	50	2021	1	1715
4244	50	2021	2	1533
4245	50	2021	3	1799
4246	50	2021	4	1353
4247	50	2021	5	1378
4248	50	2021	6	1496
4249	50	2021	7	1658
4250	50	2021	8	1592
4251	50	2021	9	1804
4252	50	2021	10	1845
4253	50	2021	11	1662
4254	50	2021	12	1376
4255	51	2021	1	5897
4256	51	2021	2	5221
4257	51	2021	3	5750
4258	51	2021	4	4519
4259	51	2021	5	5286
4260	51	2021	6	4846
4261	51	2021	7	5375
4262	51	2021	8	5211
4263	51	2021	9	6174
4264	51	2021	10	5963
4265	51	2021	11	6417
4266	51	2021	12	4563
4267	51	2022	1	8575
4268	51	2022	2	8615
4269	51	2022	3	8461
4270	51	2022	4	7294
4271	51	2022	5	8212
4272	51	2022	6	7721
4273	51	2022	7	8006
4274	51	2022	8	9031
4275	51	2022	9	8886
4276	51	2022	10	9104
4277	51	2022	11	8799
4278	51	2022	12	7195
4279	51	2023	1	8425
4280	51	2023	2	8541
4281	51	2023	3	8509
4282	51	2023	4	7878
4283	51	2023	5	7389
4284	51	2023	6	8674
4285	51	2023	7	8523
4286	51	2023	8	9286
4287	51	2023	9	8852
4288	51	2023	10	9924
4289	51	2023	11	9055
4290	51	2023	12	6947
4291	51	2024	1	9284
4292	51	2024	2	8906
4293	51	2024	3	9792
4294	51	2024	4	8547
4295	51	2024	5	9628
4296	51	2024	6	8659
4297	51	2024	7	9683
4298	51	2024	8	10340
4299	51	2024	9	9723
4300	51	2024	10	11754
4301	51	2024	11	10236
4302	51	2024	12	8077
4303	51	2025	1	10356
4304	51	2025	2	10136
4305	51	2025	3	11100
4306	51	2025	4	8355
4307	51	2025	5	9306
4308	51	2025	6	8981
4309	51	2025	7	10440
4310	51	2025	8	10657
4311	51	2025	9	10940
4312	51	2025	10	10928
4313	51	2025	11	10955
4314	51	2025	12	8291
4315	51	2026	1	9513
4316	51	2026	2	9011
4317	51	2026	3	10246
4318	51	2026	4	9104
4319	51	2026	5	8769
4320	51	2026	6	9009
4321	52	2018	1	379
4322	52	2018	2	408
4323	52	2018	3	419
4324	52	2018	4	348
4325	52	2018	5	346
4326	52	2018	6	403
4327	52	2018	7	383
4328	52	2018	8	442
4329	52	2018	9	435
4330	52	2018	10	444
4331	52	2018	11	441
4332	52	2018	12	318
4333	52	2019	1	394
4334	52	2019	2	405
4335	52	2019	3	449
4336	52	2019	4	374
4337	52	2019	5	363
4338	52	2019	6	403
4339	52	2019	7	402
4340	52	2019	8	429
4341	52	2019	9	413
4342	52	2019	10	459
4343	52	2019	11	447
4344	52	2019	12	317
4345	52	2020	1	303
4346	52	2020	2	278
4347	52	2020	3	303
4348	52	2020	4	239
4349	52	2020	5	279
4350	52	2020	6	254
4351	52	2020	7	283
4352	52	2020	8	303
4353	52	2020	9	282
4354	52	2020	10	315
4355	52	2020	11	328
4356	52	2020	12	241
4357	52	2021	1	387
4358	52	2021	2	355
4359	52	2021	3	364
4360	52	2021	4	295
4361	52	2021	5	320
4362	52	2021	6	345
4363	52	2021	7	379
4364	52	2021	8	387
4365	52	2021	9	367
4366	52	2021	10	391
4367	52	2021	11	405
4368	52	2021	12	291
4369	52	2022	1	425
4370	52	2022	2	414
4371	52	2022	3	461
4372	52	2022	4	339
4373	52	2022	5	349
4374	52	2022	6	410
4375	52	2022	7	400
4376	52	2022	8	387
4377	52	2022	9	456
4378	52	2022	10	440
4379	52	2022	11	435
4380	52	2022	12	354
4381	52	2023	1	396
4382	52	2023	2	422
4383	52	2023	3	403
4384	52	2023	4	339
4385	52	2023	5	393
4386	52	2023	6	394
4387	52	2023	7	399
4388	52	2023	8	400
4389	52	2023	9	426
4390	52	2023	10	439
4391	52	2023	11	437
4392	52	2023	12	370
4393	52	2024	1	468
4394	52	2024	2	478
4395	52	2024	3	520
4396	52	2024	4	421
4397	52	2024	5	423
4398	52	2024	6	437
4399	52	2024	7	500
4400	52	2024	8	500
4401	52	2024	9	474
4402	52	2024	10	547
4403	52	2024	11	483
4404	52	2024	12	408
4405	53	2019	1	8926
4406	53	2019	2	8204
4407	53	2019	3	9290
4408	53	2019	4	7810
4409	53	2019	5	7683
4410	53	2019	6	7583
4411	53	2019	7	7647
4412	53	2019	8	8040
4413	53	2019	9	8589
4414	53	2019	10	9503
4415	53	2019	11	9347
4416	53	2019	12	7346
4417	53	2020	1	5799
4418	53	2020	2	6142
4419	53	2020	3	6863
4420	53	2020	4	5134
4421	53	2020	5	5560
4422	53	2020	6	6098
4423	53	2020	7	6030
4424	53	2020	8	6457
4425	53	2020	9	6383
4426	53	2020	10	7028
4427	53	2020	11	6285
4428	53	2020	12	4948
4429	53	2021	1	7663
4430	53	2021	2	6658
4431	53	2021	3	7400
4432	53	2021	4	6423
4433	53	2021	5	7063
4434	53	2021	6	7369
4435	53	2021	7	7165
4436	53	2021	8	7185
4437	53	2021	9	7938
4438	53	2021	10	8292
4439	53	2021	11	8284
4440	53	2021	12	6556
4441	53	2022	1	10822
4442	53	2022	2	11441
4443	53	2022	3	11691
4444	53	2022	4	10668
4445	53	2022	5	9789
4446	53	2022	6	10661
4447	53	2022	7	11931
4448	53	2022	8	11195
4449	53	2022	9	12298
4450	53	2022	10	12195
4451	53	2022	11	13131
4452	53	2022	12	9153
4453	53	2023	1	11899
4454	53	2023	2	10366
4455	53	2023	3	11199
4456	53	2023	4	9288
4457	53	2023	5	9690
4458	53	2023	6	11147
4459	53	2023	7	11759
4460	53	2023	8	11246
4461	53	2023	9	11287
4462	53	2023	10	12608
4463	53	2023	11	11636
4464	53	2023	12	9410
4465	53	2024	1	13131
4466	53	2024	2	11692
4467	53	2024	3	13722
4468	53	2024	4	11475
4469	53	2024	5	11159
4470	53	2024	6	12131
4471	53	2024	7	12216
4472	53	2024	8	13401
4473	53	2024	9	12714
4474	53	2024	10	14105
4475	53	2024	11	14170
4476	53	2024	12	11623
4477	53	2025	1	13575
4478	53	2025	2	12424
4479	53	2025	3	14466
4480	53	2025	4	10999
4481	53	2025	5	12838
4482	53	2025	6	12852
4483	53	2025	7	11953
4484	53	2025	8	12694
4485	53	2025	9	12640
4486	53	2025	10	15353
4487	53	2025	11	12917
4488	53	2025	12	11070
4489	53	2026	1	13915
4490	53	2026	2	13273
4491	53	2026	3	14819
4492	53	2026	4	10879
4493	53	2026	5	11494
4494	53	2026	6	12397
4495	54	2020	1	5611
4496	54	2020	2	4936
4497	54	2020	3	5988
4498	54	2020	4	4541
4499	54	2020	5	4994
4500	54	2020	6	5029
4501	54	2020	7	5424
4502	54	2020	8	5630
4503	54	2020	9	5681
4504	54	2020	10	5710
4505	54	2020	11	5522
4506	54	2020	12	4747
4507	54	2021	1	6929
4508	54	2021	2	5950
4509	54	2021	3	6703
4510	54	2021	4	5321
4511	54	2021	5	6129
4512	54	2021	6	6013
4513	54	2021	7	6568
4514	54	2021	8	6806
4515	54	2021	9	6587
4516	54	2021	10	7548
4517	54	2021	11	6632
4518	54	2021	12	5468
4519	54	2022	1	9210
4520	54	2022	2	10250
4521	54	2022	3	10111
4522	54	2022	4	8512
4523	54	2022	5	8883
4524	54	2022	6	8828
4525	54	2022	7	10587
4526	54	2022	8	9625
4527	54	2022	9	10936
4528	54	2022	10	11934
4529	54	2022	11	10074
4530	54	2022	12	8788
4531	54	2023	1	10006
4532	54	2023	2	8971
4533	54	2023	3	10360
4534	54	2023	4	9360
4535	54	2023	5	9253
4536	54	2023	6	8635
4537	54	2023	7	9503
4538	54	2023	8	9680
4539	54	2023	9	9916
4540	54	2023	10	11698
4541	54	2023	11	10673
4542	54	2023	12	7760
4543	54	2024	1	10573
4544	54	2024	2	11142
4545	54	2024	3	11315
4546	54	2024	4	9266
4547	54	2024	5	11214
4548	54	2024	6	10445
4549	54	2024	7	10547
4550	54	2024	8	12062
4551	54	2024	9	11422
4552	54	2024	10	12151
4553	54	2024	11	13090
4554	54	2024	12	10015
4555	54	2025	1	11579
4556	54	2025	2	11200
4557	54	2025	3	11958
4558	54	2025	4	10212
4559	54	2025	5	9969
4560	54	2025	6	11369
4561	54	2025	7	11572
4562	54	2025	8	11632
4563	54	2025	9	12320
4564	54	2025	10	11998
4565	54	2025	11	12980
4566	54	2025	12	9775
4567	54	2026	1	11149
4568	54	2026	2	10298
4569	54	2026	3	11330
4570	54	2026	4	9384
4571	54	2026	5	10741
4572	54	2026	6	10865
4573	55	2022	1	4488
4574	55	2022	2	4161
4575	55	2022	3	4326
4576	55	2022	4	3507
4577	55	2022	5	4256
4578	55	2022	6	3911
4579	55	2022	7	4161
4580	55	2022	8	4309
4581	55	2022	9	4520
4582	55	2022	10	5202
4583	55	2022	11	4332
4584	55	2022	12	3479
4585	55	2023	1	4622
4586	55	2023	2	4030
4587	55	2023	3	4675
4588	55	2023	4	3876
4589	55	2023	5	4106
4590	55	2023	6	4064
4591	55	2023	7	4190
4592	55	2023	8	4638
4593	55	2023	9	4541
4594	55	2023	10	4527
4595	55	2023	11	4694
4596	55	2023	12	3478
4597	55	2024	1	5114
4598	55	2024	2	4529
4599	55	2024	3	5160
4600	55	2024	4	4237
4601	55	2024	5	4582
4602	55	2024	6	4451
4603	55	2024	7	5004
4604	55	2024	8	5029
4605	55	2024	9	4925
4606	55	2024	10	5626
4607	55	2024	11	5357
4608	55	2024	12	4438
4609	55	2025	1	5203
4610	55	2025	2	4699
4611	55	2025	3	4841
4612	55	2025	4	4411
4613	55	2025	5	4696
4614	55	2025	6	4525
4615	55	2025	7	4816
4616	55	2025	8	4989
4617	55	2025	9	5247
4618	55	2025	10	5814
4619	55	2025	11	5468
4620	55	2025	12	3883
4621	55	2026	1	5195
4622	55	2026	2	4970
4623	55	2026	3	5425
4624	55	2026	4	4633
4625	55	2026	5	4216
4626	55	2026	6	4833
4627	56	2025	1	3374
4628	56	2025	2	3098
4629	56	2025	3	3411
4630	56	2025	4	2945
4631	56	2025	5	3203
4632	56	2025	6	3336
4633	56	2025	7	3299
4634	56	2025	8	3560
4635	56	2025	9	3494
4636	56	2025	10	3736
4637	56	2025	11	3930
4638	56	2025	12	3013
4639	56	2026	1	3761
4640	56	2026	2	3560
4641	56	2026	3	3499
4642	56	2026	4	3037
4643	56	2026	5	3409
4644	56	2026	6	3329
4645	57	2020	1	197
4646	57	2020	2	180
4647	57	2020	3	182
4648	57	2020	4	163
4649	57	2020	5	162
4650	57	2020	6	179
4651	57	2020	7	177
4652	57	2020	8	181
4653	57	2020	9	197
4654	57	2020	10	198
4655	57	2020	11	192
4656	57	2020	12	145
4657	57	2021	1	235
4658	57	2021	2	215
4659	57	2021	3	246
4660	57	2021	4	191
4661	57	2021	5	203
4662	57	2021	6	228
4663	57	2021	7	212
4664	57	2021	8	239
4665	57	2021	9	219
4666	57	2021	10	270
4667	57	2021	11	226
4668	57	2021	12	184
4669	57	2022	1	254
4670	57	2022	2	246
4671	57	2022	3	278
4672	57	2022	4	227
4673	57	2022	5	247
4674	57	2022	6	225
4675	57	2022	7	250
4676	57	2022	8	264
4677	57	2022	9	277
4678	57	2022	10	307
4679	57	2022	11	289
4680	57	2022	12	229
4681	57	2023	1	254
4682	57	2023	2	240
4683	57	2023	3	259
4684	57	2023	4	214
4685	57	2023	5	223
4686	57	2023	6	248
4687	57	2023	7	237
4688	57	2023	8	255
4689	57	2023	9	278
4690	57	2023	10	269
4691	57	2023	11	293
4692	57	2023	12	224
4693	57	2024	1	270
4694	57	2024	2	275
4695	57	2024	3	297
4696	57	2024	4	250
4697	57	2024	5	276
4698	57	2024	6	255
4699	57	2024	7	268
4700	57	2024	8	287
4701	57	2024	9	319
4702	57	2024	10	306
4703	57	2024	11	324
4704	57	2024	12	237
4705	57	2025	1	280
4706	57	2025	2	289
4707	57	2025	3	315
4708	57	2025	4	250
4709	57	2025	5	275
4710	57	2025	6	273
4711	57	2025	7	271
4712	57	2025	8	302
4713	57	2025	9	297
4714	57	2025	10	315
4715	57	2025	11	314
4716	57	2025	12	256
4717	57	2026	1	307
4718	57	2026	2	296
4719	57	2026	3	324
4720	57	2026	4	272
4721	57	2026	5	270
4722	57	2026	6	263
4723	58	2022	1	39
4724	58	2022	2	37
4725	58	2022	3	42
4726	58	2022	4	35
4727	58	2022	5	38
4728	58	2022	6	37
4729	58	2022	7	43
4730	58	2022	8	38
4731	58	2022	9	41
4732	58	2022	10	44
4733	58	2022	11	42
4734	58	2022	12	31
4735	58	2023	1	56
4736	58	2023	2	57
4737	58	2023	3	56
4738	58	2023	4	48
4739	58	2023	5	54
4740	58	2023	6	49
4741	58	2023	7	57
4742	58	2023	8	57
4743	58	2023	9	60
4744	58	2023	10	61
4745	58	2023	11	63
4746	58	2023	12	49
4747	58	2024	1	60
4748	58	2024	2	61
4749	58	2024	3	67
4750	58	2024	4	56
4751	58	2024	5	59
4752	58	2024	6	59
4753	58	2024	7	63
4754	58	2024	8	61
4755	58	2024	9	71
4756	58	2024	10	77
4757	58	2024	11	75
4758	58	2024	12	58
4759	58	2025	1	69
4760	58	2025	2	63
4761	58	2025	3	66
4762	58	2025	4	55
4763	58	2025	5	57
4764	58	2025	6	60
4765	58	2025	7	61
4766	58	2025	8	71
4767	58	2025	9	65
4768	58	2025	10	75
4769	58	2025	11	67
4770	58	2025	12	59
4771	58	2026	1	63
4772	58	2026	2	62
4773	58	2026	3	67
4774	58	2026	4	55
4775	58	2026	5	61
4776	58	2026	6	60
4777	59	2016	1	1611
4778	59	2016	2	1525
4779	59	2016	3	1578
4780	59	2016	4	1407
4781	59	2016	5	1371
4782	59	2016	6	1419
4783	59	2016	7	1567
4784	59	2016	8	1577
4785	59	2016	9	1479
4786	59	2016	10	1808
4787	59	2016	11	1702
4788	59	2016	12	1349
4789	59	2017	1	1514
4790	59	2017	2	1507
4791	59	2017	3	1666
4792	59	2017	4	1353
4793	59	2017	5	1502
4794	59	2017	6	1432
4795	59	2017	7	1449
4796	59	2017	8	1564
4797	59	2017	9	1512
4798	59	2017	10	1739
4799	59	2017	11	1525
4800	59	2017	12	1356
4801	59	2018	1	1408
4802	59	2018	2	1466
4803	59	2018	3	1656
4804	59	2018	4	1352
4805	59	2018	5	1343
4806	59	2018	6	1421
4807	59	2018	7	1628
4808	59	2018	8	1421
4809	59	2018	9	1677
4810	59	2018	10	1591
4811	59	2018	11	1752
4812	59	2018	12	1259
4813	59	2019	1	1633
4814	59	2019	2	1532
4815	59	2019	3	1524
4816	59	2019	4	1431
4817	59	2019	5	1370
4818	59	2019	6	1461
4819	59	2019	7	1577
4820	59	2019	8	1609
4821	59	2019	9	1581
4822	59	2019	10	1620
4823	59	2019	11	1750
4824	59	2019	12	1222
4825	59	2020	1	1186
4826	59	2020	2	974
4827	59	2020	3	1196
4828	59	2020	4	894
4829	59	2020	5	983
4830	59	2020	6	997
4831	59	2020	7	1158
4832	59	2020	8	1052
4833	59	2020	9	1100
4834	59	2020	10	1257
4835	59	2020	11	1218
4836	59	2020	12	983
4837	60	2016	1	1290
4838	60	2016	2	1136
4839	60	2016	3	1279
4840	60	2016	4	1012
4841	60	2016	5	1109
4842	60	2016	6	1204
4843	60	2016	7	1248
4844	60	2016	8	1153
4845	60	2016	9	1228
4846	60	2016	10	1477
4847	60	2016	11	1356
4848	60	2016	12	1036
4849	60	2017	1	1155
4850	60	2017	2	1180
4851	60	2017	3	1327
4852	60	2017	4	1071
4853	60	2017	5	1184
4854	60	2017	6	1126
4855	60	2017	7	1153
4856	60	2017	8	1280
4857	60	2017	9	1181
4858	60	2017	10	1478
4859	60	2017	11	1303
4860	60	2017	12	1095
4861	60	2018	1	1252
4862	60	2018	2	1246
4863	60	2018	3	1215
4864	60	2018	4	1134
4865	60	2018	5	1148
4866	60	2018	6	1206
4867	60	2018	7	1171
4868	60	2018	8	1160
4869	60	2018	9	1287
4870	60	2018	10	1278
4871	60	2018	11	1394
4872	60	2018	12	1056
4873	60	2019	1	1231
4874	60	2019	2	1138
4875	60	2019	3	1308
4876	60	2019	4	1064
4877	60	2019	5	1152
4878	60	2019	6	1121
4879	60	2019	7	1243
4880	60	2019	8	1298
4881	60	2019	9	1221
4882	60	2019	10	1406
4883	60	2019	11	1254
4884	60	2019	12	950
4885	60	2020	1	840
4886	60	2020	2	798
4887	60	2020	3	897
4888	60	2020	4	779
4889	60	2020	5	811
4890	60	2020	6	775
4891	60	2020	7	921
4892	60	2020	8	914
4893	60	2020	9	930
4894	60	2020	10	916
4895	60	2020	11	925
4896	60	2020	12	754
4897	61	2018	1	425
4898	61	2018	2	361
4899	61	2018	3	434
4900	61	2018	4	363
4901	61	2018	5	377
4902	61	2018	6	394
4903	61	2018	7	398
4904	61	2018	8	409
4905	61	2018	9	418
4906	61	2018	10	431
4907	61	2018	11	429
4908	61	2018	12	362
4909	61	2019	1	411
4910	61	2019	2	366
4911	61	2019	3	457
4912	61	2019	4	372
4913	61	2019	5	397
4914	61	2019	6	389
4915	61	2019	7	408
4916	61	2019	8	387
4917	61	2019	9	406
4918	61	2019	10	429
4919	61	2019	11	432
4920	61	2019	12	320
4921	61	2020	1	289
4922	61	2020	2	270
4923	61	2020	3	310
4924	61	2020	4	242
4925	61	2020	5	251
4926	61	2020	6	265
4927	61	2020	7	272
4928	61	2020	8	311
4929	61	2020	9	290
4930	61	2020	10	320
4931	61	2020	11	338
4932	61	2020	12	239
4933	61	2021	1	370
4934	61	2021	2	333
4935	61	2021	3	352
4936	61	2021	4	311
4937	61	2021	5	305
4938	61	2021	6	348
4939	61	2021	7	381
4940	61	2021	8	389
4941	61	2021	9	398
4942	61	2021	10	422
4943	61	2021	11	371
4944	61	2021	12	309
4945	62	2019	1	3232
4946	62	2019	2	3105
4947	62	2019	3	3473
4948	62	2019	4	2736
4949	62	2019	5	3180
4950	62	2019	6	3216
4951	62	2019	7	3440
4952	62	2019	8	3199
4953	62	2019	9	3639
4954	62	2019	10	3467
4955	62	2019	11	3742
4956	62	2019	12	2536
4957	62	2020	1	2406
4958	62	2020	2	2285
4959	62	2020	3	2625
4960	62	2020	4	2148
4961	62	2020	5	2331
4962	62	2020	6	2296
4963	62	2020	7	2267
4964	62	2020	8	2219
4965	62	2020	9	2436
4966	62	2020	10	2483
4967	62	2020	11	2647
4968	62	2020	12	2092
4969	62	2021	1	2940
4970	62	2021	2	2544
4971	62	2021	3	2917
4972	62	2021	4	2565
4973	62	2021	5	2442
4974	62	2021	6	2596
4975	62	2021	7	2621
4976	62	2021	8	3117
4977	62	2021	9	2901
4978	62	2021	10	3257
4979	62	2021	11	3306
4980	62	2021	12	2574
4981	62	2022	1	2259
4982	62	2022	2	2066
4983	62	2022	3	2501
4984	62	2022	4	1963
4985	62	2022	5	2241
4986	62	2022	6	2159
4987	62	2022	7	2340
4988	62	2022	8	2348
4989	62	2022	9	2361
4990	62	2022	10	2570
4991	62	2022	11	2494
4992	62	2022	12	1896
4993	62	2023	1	2157
4994	62	2023	2	2280
4995	62	2023	3	2356
4996	62	2023	4	2112
4997	62	2023	5	1971
4998	62	2023	6	2249
4999	62	2023	7	2392
5000	62	2023	8	2207
5001	62	2023	9	2258
5002	62	2023	10	2624
5003	62	2023	11	2602
5004	62	2023	12	2013
5005	62	2024	1	2646
5006	62	2024	2	2393
5007	62	2024	3	2666
5008	62	2024	4	2227
5009	62	2024	5	2522
5010	62	2024	6	2320
5011	62	2024	7	2578
5012	62	2024	8	2596
5013	62	2024	9	2705
5014	62	2024	10	2807
5015	62	2024	11	2621
5016	62	2024	12	2368
5017	62	2025	1	2747
5018	62	2025	2	2341
5019	62	2025	3	2787
5020	62	2025	4	2344
5021	62	2025	5	2493
5022	62	2025	6	2528
5023	62	2025	7	2449
5024	62	2025	8	2460
5025	62	2025	9	2750
5026	62	2025	10	2853
5027	62	2025	11	2768
5028	62	2025	12	2350
5029	62	2026	1	2791
5030	62	2026	2	2421
5031	62	2026	3	2708
5032	62	2026	4	2480
5033	62	2026	5	2417
5034	62	2026	6	2476
5035	63	2020	1	2160
5036	63	2020	2	2022
5037	63	2020	3	2311
5038	63	2020	4	1880
5039	63	2020	5	1755
5040	63	2020	6	2041
5041	63	2020	7	1931
5042	63	2020	8	2147
5043	63	2020	9	2077
5044	63	2020	10	2233
5045	63	2020	11	2257
5046	63	2020	12	1798
5047	63	2021	1	2457
5048	63	2021	2	2586
5049	63	2021	3	2697
5050	63	2021	4	2040
5051	63	2021	5	2346
5052	63	2021	6	2434
5053	63	2021	7	2309
5054	63	2021	8	2554
5055	63	2021	9	2780
5056	63	2021	10	2650
5057	63	2021	11	2808
5058	63	2021	12	2285
5059	63	2022	1	3946
5060	63	2022	2	3918
5061	63	2022	3	4113
5062	63	2022	4	3187
5063	63	2022	5	3571
5064	63	2022	6	3343
5065	63	2022	7	4070
5066	63	2022	8	4000
5067	63	2022	9	3887
5068	63	2022	10	4608
5069	63	2022	11	4087
5070	63	2022	12	3131
5071	64	2024	1	3332
5072	64	2024	2	3483
5073	64	2024	3	3455
5074	64	2024	4	3054
5075	64	2024	5	3134
5076	64	2024	6	3377
5077	64	2024	7	3429
5078	64	2024	8	3792
5079	64	2024	9	3667
5080	64	2024	10	3884
5081	64	2024	11	3578
5082	64	2024	12	2803
5083	64	2025	1	3558
5084	64	2025	2	3150
5085	64	2025	3	3628
5086	64	2025	4	3066
5087	64	2025	5	3140
5088	64	2025	6	3078
5089	64	2025	7	3228
5090	64	2025	8	3253
5091	64	2025	9	3406
5092	64	2025	10	3741
5093	64	2025	11	3506
5094	64	2025	12	2799
5095	64	2026	1	3305
5096	64	2026	2	3445
5097	64	2026	3	3856
5098	64	2026	4	2954
5099	64	2026	5	3100
5100	64	2026	6	3460
5101	65	2023	1	1271
5102	65	2023	2	1155
5103	65	2023	3	1388
5104	65	2023	4	1000
5105	65	2023	5	1204
5106	65	2023	6	1198
5107	65	2023	7	1267
5108	65	2023	8	1151
5109	65	2023	9	1187
5110	65	2023	10	1458
5111	65	2023	11	1325
5112	65	2023	12	1110
5113	65	2024	1	1304
5114	65	2024	2	1293
5115	65	2024	3	1434
5116	65	2024	4	1252
5117	65	2024	5	1395
5118	65	2024	6	1278
5119	65	2024	7	1391
5120	65	2024	8	1473
5121	65	2024	9	1534
5122	65	2024	10	1623
5123	65	2024	11	1482
5124	65	2024	12	1216
5125	65	2025	1	1302
5126	65	2025	2	1340
5127	65	2025	3	1483
5128	65	2025	4	1264
5129	65	2025	5	1303
5130	65	2025	6	1315
5131	65	2025	7	1407
5132	65	2025	8	1394
5133	65	2025	9	1345
5134	65	2025	10	1603
5135	65	2025	11	1512
5136	65	2025	12	1095
5137	65	2026	1	1328
5138	65	2026	2	1301
5139	65	2026	3	1609
5140	65	2026	4	1214
5141	65	2026	5	1352
5142	65	2026	6	1410
5143	66	2016	1	4235
5144	66	2016	2	4304
5145	66	2016	3	5063
5146	66	2016	4	4068
5147	66	2016	5	4174
5148	66	2016	6	4603
5149	66	2016	7	4687
5150	66	2016	8	4329
5151	66	2016	9	4673
5152	66	2016	10	5454
5153	66	2016	11	5037
5154	66	2016	12	3796
5155	66	2017	1	4722
5156	66	2017	2	4264
5157	66	2017	3	5196
5158	66	2017	4	4296
5159	66	2017	5	4388
5160	66	2017	6	4172
5161	66	2017	7	4474
5162	66	2017	8	4462
5163	66	2017	9	4405
5164	66	2017	10	5145
5165	66	2017	11	5260
5166	66	2017	12	4062
5167	66	2018	1	4933
5168	66	2018	2	4533
5169	66	2018	3	4976
5170	66	2018	4	4063
5171	66	2018	5	4160
5172	66	2018	6	4592
5173	66	2018	7	4835
5174	66	2018	8	5003
5175	66	2018	9	4946
5176	66	2018	10	5578
5177	66	2018	11	4915
5178	66	2018	12	3601
5179	66	2019	1	4917
5180	66	2019	2	4341
5181	66	2019	3	4896
5182	66	2019	4	4176
5183	66	2019	5	4400
5184	66	2019	6	4445
5185	66	2019	7	4718
5186	66	2019	8	4292
5187	66	2019	9	4978
5188	66	2019	10	4801
5189	66	2019	11	5283
5190	66	2019	12	3964
5191	66	2020	1	3075
5192	66	2020	2	3018
5193	66	2020	3	3670
5194	66	2020	4	3011
5195	66	2020	5	3209
5196	66	2020	6	3116
5197	66	2020	7	3448
5198	66	2020	8	3277
5199	66	2020	9	3699
5200	66	2020	10	3577
5201	66	2020	11	3566
5202	66	2020	12	2757
5203	66	2021	1	4022
5204	66	2021	2	3938
5205	66	2021	3	4595
5206	66	2021	4	3459
5207	66	2021	5	3968
5208	66	2021	6	3935
5209	66	2021	7	4019
5210	66	2021	8	4303
5211	66	2021	9	4281
5212	66	2021	10	4295
5213	66	2021	11	4230
5214	66	2021	12	3556
5215	66	2022	1	4406
5216	66	2022	2	4334
5217	66	2022	3	4623
5218	66	2022	4	3788
5219	66	2022	5	4495
5220	66	2022	6	4240
5221	66	2022	7	4262
5222	66	2022	8	4559
5223	66	2022	9	4682
5224	66	2022	10	5180
5225	66	2022	11	4673
5226	66	2022	12	3690
5227	66	2023	1	4884
5228	66	2023	2	4200
5229	66	2023	3	4977
5230	66	2023	4	4126
5231	66	2023	5	3916
5232	66	2023	6	4011
5233	66	2023	7	4723
5234	66	2023	8	4395
5235	66	2023	9	4431
5236	66	2023	10	5364
5237	66	2023	11	4693
5238	66	2023	12	3666
5239	66	2024	1	5341
5240	66	2024	2	5162
5241	66	2024	3	6023
5242	66	2024	4	4566
5243	66	2024	5	4910
5244	66	2024	6	5003
5245	66	2024	7	5510
5246	66	2024	8	5129
5247	66	2024	9	5777
5248	66	2024	10	5882
5249	66	2024	11	6139
5250	66	2024	12	4706
5251	66	2025	1	4888
5252	66	2025	2	5472
5253	66	2025	3	5760
5254	66	2025	4	4467
5255	66	2025	5	4756
5256	66	2025	6	4864
5257	66	2025	7	5591
5258	66	2025	8	5077
5259	66	2025	9	5856
5260	66	2025	10	5549
5261	66	2025	11	6088
5262	66	2025	12	4777
5263	66	2026	1	5183
5264	66	2026	2	5202
5265	66	2026	3	5737
5266	66	2026	4	4716
5267	66	2026	5	4856
5268	66	2026	6	4775
5269	67	2022	1	4885
5270	67	2022	2	4838
5271	67	2022	3	4812
5272	67	2022	4	4414
5273	67	2022	5	4307
5274	67	2022	6	4834
5275	67	2022	7	4589
5276	67	2022	8	5120
5277	67	2022	9	5107
5278	67	2022	10	5871
5279	67	2022	11	4865
5280	67	2022	12	4405
5281	67	2023	1	4794
5282	67	2023	2	4875
5283	67	2023	3	5506
5284	67	2023	4	4153
5285	67	2023	5	4602
5286	67	2023	6	4281
5287	67	2023	7	5170
5288	67	2023	8	4825
5289	67	2023	9	5330
5290	67	2023	10	5540
5291	67	2023	11	5442
5292	67	2023	12	4398
5293	67	2024	1	5839
5294	67	2024	2	5122
5295	67	2024	3	6042
5296	67	2024	4	4937
5297	67	2024	5	4838
5298	67	2024	6	4981
5299	67	2024	7	5682
5300	67	2024	8	5463
5301	67	2024	9	5635
5302	67	2024	10	6086
5303	67	2024	11	5916
5304	67	2024	12	4626
5305	67	2025	1	5785
5306	67	2025	2	5357
5307	67	2025	3	5947
5308	67	2025	4	4778
5309	67	2025	5	4830
5310	67	2025	6	5349
5311	67	2025	7	5640
5312	67	2025	8	5336
5313	67	2025	9	5896
5314	67	2025	10	6463
5315	67	2025	11	6201
5316	67	2025	12	5086
5317	67	2026	1	5889
5318	67	2026	2	5776
5319	67	2026	3	6242
5320	67	2026	4	4985
5321	67	2026	5	4837
5322	67	2026	6	5020
5323	68	2016	1	2824
5324	68	2016	2	2430
5325	68	2016	3	3017
5326	68	2016	4	2339
5327	68	2016	5	2410
5328	68	2016	6	2653
5329	68	2016	7	2512
5330	68	2016	8	2869
5331	68	2016	9	2816
5332	68	2016	10	2864
5333	68	2016	11	2634
5334	68	2016	12	2353
5335	68	2017	1	2493
5336	68	2017	2	2512
5337	68	2017	3	2913
5338	68	2017	4	2416
5339	68	2017	5	2578
5340	68	2017	6	2340
5341	68	2017	7	2697
5342	68	2017	8	2846
5343	68	2017	9	2839
5344	68	2017	10	3080
5345	68	2017	11	2889
5346	68	2017	12	2269
5347	68	2018	1	2629
5348	68	2018	2	2472
5349	68	2018	3	2784
5350	68	2018	4	2395
5351	68	2018	5	2405
5352	68	2018	6	2334
5353	68	2018	7	2668
5354	68	2018	8	2702
5355	68	2018	9	2595
5356	68	2018	10	2968
5357	68	2018	11	2653
5358	68	2018	12	2275
5359	68	2019	1	2821
5360	68	2019	2	2548
5361	68	2019	3	2916
5362	68	2019	4	2216
5363	68	2019	5	2401
5364	68	2019	6	2478
5365	68	2019	7	2586
5366	68	2019	8	2868
5367	68	2019	9	2550
5368	68	2019	10	3017
5369	68	2019	11	3069
5370	68	2019	12	2233
5371	68	2020	1	1801
5372	68	2020	2	1925
5373	68	2020	3	1991
5374	68	2020	4	1600
5375	68	2020	5	1787
5376	68	2020	6	1754
5377	68	2020	7	1763
5378	68	2020	8	2014
5379	68	2020	9	2090
5380	68	2020	10	2299
5381	68	2020	11	1962
5382	68	2020	12	1653
5383	68	2021	1	2516
5384	68	2021	2	2207
5385	68	2021	3	2543
5386	68	2021	4	2209
5387	68	2021	5	2171
5388	68	2021	6	2352
5389	68	2021	7	2320
5390	68	2021	8	2487
5391	68	2021	9	2395
5392	68	2021	10	2764
5393	68	2021	11	2577
5394	68	2021	12	2038
5395	68	2022	1	3729
5396	68	2022	2	3313
5397	68	2022	3	3868
5398	68	2022	4	3031
5399	68	2022	5	3434
5400	68	2022	6	3347
5401	68	2022	7	3745
5402	68	2022	8	3868
5403	68	2022	9	3778
5404	68	2022	10	4287
5405	68	2022	11	4071
5406	68	2022	12	3018
5407	68	2023	1	3679
5408	68	2023	2	3584
5409	68	2023	3	3784
5410	68	2023	4	3106
5411	68	2023	5	3317
5412	68	2023	6	3451
5413	68	2023	7	3422
5414	68	2023	8	3660
5415	68	2023	9	3564
5416	68	2023	10	3815
5417	68	2023	11	4033
5418	68	2023	12	3177
5419	68	2024	1	3837
5420	68	2024	2	4077
5421	68	2024	3	4697
5422	68	2024	4	3720
5423	68	2024	5	3891
5424	68	2024	6	3670
5425	68	2024	7	4082
5426	68	2024	8	4329
5427	68	2024	9	4060
5428	68	2024	10	4589
5429	68	2024	11	4255
5430	68	2024	12	3535
5431	68	2025	1	4073
5432	68	2025	2	3947
5433	68	2025	3	4376
5434	68	2025	4	3706
5435	68	2025	5	3890
5436	68	2025	6	3833
5437	68	2025	7	4223
5438	68	2025	8	4458
5439	68	2025	9	4469
5440	68	2025	10	4752
5441	68	2025	11	4136
5442	68	2025	12	3653
5443	68	2026	1	3893
5444	68	2026	2	4162
5445	68	2026	3	4674
5446	68	2026	4	3879
5447	68	2026	5	4027
5448	68	2026	6	3573
5449	69	2016	1	82
5450	69	2016	2	80
5451	69	2016	3	88
5452	69	2016	4	75
5453	69	2016	5	71
5454	69	2016	6	79
5455	69	2016	7	84
5456	69	2016	8	77
5457	69	2016	9	90
5458	69	2016	10	91
5459	69	2016	11	82
5460	69	2016	12	74
5461	69	2017	1	81
5462	69	2017	2	76
5463	69	2017	3	85
5464	69	2017	4	76
5465	69	2017	5	72
5466	69	2017	6	81
5467	69	2017	7	87
5468	69	2017	8	84
5469	69	2017	9	89
5470	69	2017	10	90
5471	69	2017	11	94
5472	69	2017	12	73
5473	69	2018	1	88
5474	69	2018	2	78
5475	69	2018	3	92
5476	69	2018	4	72
5477	69	2018	5	73
5478	69	2018	6	74
5479	69	2018	7	81
5480	69	2018	8	85
5481	69	2018	9	82
5482	69	2018	10	94
5483	69	2018	11	88
5484	69	2018	12	72
5485	69	2019	1	86
5486	69	2019	2	72
5487	69	2019	3	79
5488	69	2019	4	74
5489	69	2019	5	78
5490	69	2019	6	77
5491	69	2019	7	76
5492	69	2019	8	77
5493	69	2019	9	79
5494	69	2019	10	95
5495	69	2019	11	81
5496	69	2019	12	64
5497	69	2020	1	60
5498	69	2020	2	60
5499	69	2020	3	65
5500	69	2020	4	55
5501	69	2020	5	51
5502	69	2020	6	58
5503	69	2020	7	54
5504	69	2020	8	58
5505	69	2020	9	59
5506	69	2020	10	67
5507	69	2020	11	63
5508	69	2020	12	47
5509	69	2021	1	73
5510	69	2021	2	64
5511	69	2021	3	71
5512	69	2021	4	67
5513	69	2021	5	65
5514	69	2021	6	72
5515	69	2021	7	68
5516	69	2021	8	74
5517	69	2021	9	75
5518	69	2021	10	81
5519	69	2021	11	80
5520	69	2021	12	57
5521	69	2022	1	80
5522	69	2022	2	81
5523	69	2022	3	87
5524	69	2022	4	66
5525	69	2022	5	78
5526	69	2022	6	81
5527	69	2022	7	83
5528	69	2022	8	76
5529	69	2022	9	82
5530	69	2022	10	85
5531	69	2022	11	91
5532	69	2022	12	71
5533	69	2023	1	84
5534	69	2023	2	77
5535	69	2023	3	82
5536	69	2023	4	68
5537	69	2023	5	74
5538	69	2023	6	73
5539	69	2023	7	76
5540	69	2023	8	79
5541	69	2023	9	81
5542	69	2023	10	96
5543	69	2023	11	81
5544	69	2023	12	64
5545	69	2024	1	100
5546	69	2024	2	94
5547	69	2024	3	98
5548	69	2024	4	77
5549	69	2024	5	83
5550	69	2024	6	90
5551	69	2024	7	96
5552	69	2024	8	98
5553	69	2024	9	92
5554	69	2024	10	100
5555	69	2024	11	102
5556	69	2024	12	74
5557	69	2025	1	94
5558	69	2025	2	87
5559	69	2025	3	101
5560	69	2025	4	80
5561	69	2025	5	90
5562	69	2025	6	87
5563	69	2025	7	98
5564	69	2025	8	101
5565	69	2025	9	93
5566	69	2025	10	112
5567	69	2025	11	103
5568	69	2025	12	79
5569	69	2026	1	94
5570	69	2026	2	97
5571	69	2026	3	91
5572	69	2026	4	82
5573	69	2026	5	90
5574	69	2026	6	95
5575	70	2016	1	436
5576	70	2016	2	402
5577	70	2016	3	412
5578	70	2016	4	386
5579	70	2016	5	403
5580	70	2016	6	397
5581	70	2016	7	394
5582	70	2016	8	397
5583	70	2016	9	407
5584	70	2016	10	484
5585	70	2016	11	408
5586	70	2016	12	364
5587	70	2017	1	433
5588	70	2017	2	422
5589	70	2017	3	427
5590	70	2017	4	350
5591	70	2017	5	393
5592	70	2017	6	362
5593	70	2017	7	406
5594	70	2017	8	431
5595	70	2017	9	416
5596	70	2017	10	462
5597	70	2017	11	447
5598	70	2017	12	323
5599	70	2018	1	411
5600	70	2018	2	370
5601	70	2018	3	439
5602	70	2018	4	378
5603	70	2018	5	385
5604	70	2018	6	407
5605	70	2018	7	413
5606	70	2018	8	424
5607	70	2018	9	399
5608	70	2018	10	447
5609	70	2018	11	436
5610	70	2018	12	365
5611	70	2019	1	434
5612	70	2019	2	413
5613	70	2019	3	431
5614	70	2019	4	361
5615	70	2019	5	399
5616	70	2019	6	394
5617	70	2019	7	414
5618	70	2019	8	440
5619	70	2019	9	447
5620	70	2019	10	490
5621	70	2019	11	453
5622	70	2019	12	339
5623	71	2016	1	831
5624	71	2016	2	837
5625	71	2016	3	828
5626	71	2016	4	738
5627	71	2016	5	787
5628	71	2016	6	725
5629	71	2016	7	785
5630	71	2016	8	888
5631	71	2016	9	796
5632	71	2016	10	915
5633	71	2016	11	855
5634	71	2016	12	655
5635	71	2017	1	821
5636	71	2017	2	773
5637	71	2017	3	930
5638	71	2017	4	720
5639	71	2017	5	784
5640	71	2017	6	725
5641	71	2017	7	829
5642	71	2017	8	775
5643	71	2017	9	876
5644	71	2017	10	869
5645	71	2017	11	949
5646	71	2017	12	718
5647	71	2018	1	794
5648	71	2018	2	725
5649	71	2018	3	834
5650	71	2018	4	694
5651	71	2018	5	782
5652	71	2018	6	741
5653	71	2018	7	807
5654	71	2018	8	808
5655	71	2018	9	878
5656	71	2018	10	964
5657	71	2018	11	941
5658	71	2018	12	657
5659	71	2019	1	865
5660	71	2019	2	811
5661	71	2019	3	825
5662	71	2019	4	743
5663	71	2019	5	778
5664	71	2019	6	732
5665	71	2019	7	759
5666	71	2019	8	792
5667	71	2019	9	885
5668	71	2019	10	877
5669	71	2019	11	916
5670	71	2019	12	712
5671	71	2020	1	556
5672	71	2020	2	607
5673	71	2020	3	594
5674	71	2020	4	544
5675	71	2020	5	549
5676	71	2020	6	569
5677	71	2020	7	626
5678	71	2020	8	592
5679	71	2020	9	589
5680	71	2020	10	700
5681	71	2020	11	653
5682	71	2020	12	499
5683	71	2021	1	725
5684	71	2021	2	678
5685	71	2021	3	756
5686	71	2021	4	611
5687	71	2021	5	690
5688	71	2021	6	704
5689	71	2021	7	674
5690	71	2021	8	671
5691	71	2021	9	803
5692	71	2021	10	832
5693	71	2021	11	800
5694	71	2021	12	631
5695	71	2022	1	602
5696	71	2022	2	540
5697	71	2022	3	581
5698	71	2022	4	490
5699	71	2022	5	529
5700	71	2022	6	562
5701	71	2022	7	563
5702	71	2022	8	557
5703	71	2022	9	624
5704	71	2022	10	636
5705	71	2022	11	659
5706	71	2022	12	452
5707	71	2023	1	591
5708	71	2023	2	514
5709	71	2023	3	589
5710	71	2023	4	538
5711	71	2023	5	545
5712	71	2023	6	517
5713	71	2023	7	586
5714	71	2023	8	574
5715	71	2023	9	586
5716	71	2023	10	684
5717	71	2023	11	596
5718	71	2023	12	502
5719	72	2017	1	1180
5720	72	2017	2	1212
5721	72	2017	3	1334
5722	72	2017	4	1078
5723	72	2017	5	1200
5724	72	2017	6	1238
5725	72	2017	7	1223
5726	72	2017	8	1222
5727	72	2017	9	1289
5728	72	2017	10	1320
5729	72	2017	11	1347
5730	72	2017	12	1104
5731	72	2018	1	1259
5732	72	2018	2	1105
5733	72	2018	3	1192
5734	72	2018	4	1141
5735	72	2018	5	1129
5736	72	2018	6	1079
5737	72	2018	7	1196
5738	72	2018	8	1181
5739	72	2018	9	1322
5740	72	2018	10	1374
5741	72	2018	11	1247
5742	72	2018	12	980
5743	72	2019	1	1241
5744	72	2019	2	1099
5745	72	2019	3	1359
5746	72	2019	4	1074
5747	72	2019	5	1188
5748	72	2019	6	1215
5749	72	2019	7	1119
5750	72	2019	8	1324
5751	72	2019	9	1196
5752	72	2019	10	1481
5753	72	2019	11	1349
5754	72	2019	12	1018
5755	72	2020	1	892
5756	72	2020	2	835
5757	72	2020	3	979
5758	72	2020	4	802
5759	72	2020	5	784
5760	72	2020	6	888
5761	72	2020	7	920
5762	72	2020	8	933
5763	72	2020	9	877
5764	72	2020	10	1029
5765	72	2020	11	1007
5766	72	2020	12	711
5767	72	2021	1	1004
5768	72	2021	2	1094
5769	72	2021	3	1084
5770	72	2021	4	923
5771	72	2021	5	956
5772	72	2021	6	1005
5773	72	2021	7	982
5774	72	2021	8	1022
5775	72	2021	9	1110
5776	72	2021	10	1271
5777	72	2021	11	1197
5778	72	2021	12	938
5779	72	2022	1	1706
5780	72	2022	2	1571
5781	72	2022	3	1752
5782	72	2022	4	1354
5783	72	2022	5	1472
5784	72	2022	6	1462
5785	72	2022	7	1529
5786	72	2022	8	1544
5787	72	2022	9	1739
5788	72	2022	10	1796
5789	72	2022	11	1719
5790	72	2022	12	1307
5791	72	2023	1	1671
5792	72	2023	2	1463
5793	72	2023	3	1641
5794	72	2023	4	1459
5795	72	2023	5	1556
5796	72	2023	6	1614
5797	72	2023	7	1599
5798	72	2023	8	1567
5799	72	2023	9	1773
5800	72	2023	10	1838
5801	72	2023	11	1876
5802	72	2023	12	1337
5803	73	2016	1	164
5804	73	2016	2	156
5805	73	2016	3	154
5806	73	2016	4	140
5807	73	2016	5	151
5808	73	2016	6	132
5809	73	2016	7	143
5810	73	2016	8	147
5811	73	2016	9	163
5812	73	2016	10	164
5813	73	2016	11	163
5814	73	2016	12	131
5815	73	2017	1	164
5816	73	2017	2	143
5817	73	2017	3	166
5818	73	2017	4	131
5819	73	2017	5	145
5820	73	2017	6	139
5821	73	2017	7	144
5822	73	2017	8	157
5823	73	2017	9	165
5824	73	2017	10	185
5825	73	2017	11	177
5826	73	2017	12	127
5827	74	2016	1	4621
5828	74	2016	2	3993
5829	74	2016	3	4700
5830	74	2016	4	4013
5831	74	2016	5	3789
5832	74	2016	6	4146
5833	74	2016	7	4012
5834	74	2016	8	4217
5835	74	2016	9	4627
5836	74	2016	10	4653
5837	74	2016	11	4691
5838	74	2016	12	3777
5839	74	2017	1	4422
5840	74	2017	2	4143
5841	74	2017	3	4854
5842	74	2017	4	3678
5843	74	2017	5	4162
5844	74	2017	6	4174
5845	74	2017	7	4258
5846	74	2017	8	3986
5847	74	2017	9	4780
5848	74	2017	10	5119
5849	74	2017	11	4691
5850	74	2017	12	3351
5851	74	2018	1	4339
5852	74	2018	2	4009
5853	74	2018	3	4446
5854	74	2018	4	3501
5855	74	2018	5	4254
5856	74	2018	6	4075
5857	74	2018	7	4260
5858	74	2018	8	4658
5859	74	2018	9	4644
5860	74	2018	10	4447
5861	74	2018	11	4657
5862	74	2018	12	3818
5863	74	2019	1	4145
5864	74	2019	2	4033
5865	74	2019	3	4536
5866	74	2019	4	3511
5867	74	2019	5	4080
5868	74	2019	6	3965
5869	74	2019	7	4131
5870	74	2019	8	4363
5871	74	2019	9	4185
5872	74	2019	10	4740
5873	74	2019	11	4847
5874	74	2019	12	3560
5875	74	2020	1	3154
5876	74	2020	2	3049
5877	74	2020	3	3455
5878	74	2020	4	2775
5879	74	2020	5	2621
5880	74	2020	6	3020
5881	74	2020	7	3194
5882	74	2020	8	3033
5883	74	2020	9	3376
5884	74	2020	10	3665
5885	74	2020	11	3198
5886	74	2020	12	2649
5887	74	2021	1	3665
5888	74	2021	2	3520
5889	74	2021	3	3691
5890	74	2021	4	3540
5891	74	2021	5	3520
5892	74	2021	6	3592
5893	74	2021	7	3932
5894	74	2021	8	3823
5895	74	2021	9	3714
5896	74	2021	10	3922
5897	74	2021	11	4381
5898	74	2021	12	3085
5899	74	2022	1	2855
5900	74	2022	2	2932
5901	74	2022	3	3388
5902	74	2022	4	2436
5903	74	2022	5	2639
5904	74	2022	6	2671
5905	74	2022	7	3031
5906	74	2022	8	2896
5907	74	2022	9	3223
5908	74	2022	10	3627
5909	74	2022	11	3095
5910	74	2022	12	2556
5911	74	2023	1	3069
5912	74	2023	2	3064
5913	74	2023	3	3271
5914	74	2023	4	2660
5915	74	2023	5	2651
5916	74	2023	6	2978
5917	74	2023	7	3174
5918	74	2023	8	3180
5919	74	2023	9	3263
5920	74	2023	10	3247
5921	74	2023	11	3381
5922	74	2023	12	2698
5923	74	2024	1	3610
5924	74	2024	2	3138
5925	74	2024	3	3798
5926	74	2024	4	3200
5927	74	2024	5	3213
5928	74	2024	6	3111
5929	74	2024	7	3290
5930	74	2024	8	3249
5931	74	2024	9	3802
5932	74	2024	10	3669
5933	74	2024	11	3720
5934	74	2024	12	2929
5935	74	2025	1	3514
5936	74	2025	2	3150
5937	74	2025	3	3644
5938	74	2025	4	2989
5939	74	2025	5	3196
5940	74	2025	6	3224
5941	74	2025	7	3367
5942	74	2025	8	3611
5943	74	2025	9	3332
5944	74	2025	10	3948
5945	74	2025	11	3653
5946	74	2025	12	2687
5947	74	2026	1	3444
5948	74	2026	2	3238
5949	74	2026	3	3593
5950	74	2026	4	3251
5951	74	2026	5	2960
5952	74	2026	6	3488
5953	75	2016	1	3174
5954	75	2016	2	3015
5955	75	2016	3	3208
5956	75	2016	4	2970
5957	75	2016	5	2962
5958	75	2016	6	3089
5959	75	2016	7	3423
5960	75	2016	8	3551
5961	75	2016	9	3462
5962	75	2016	10	3934
5963	75	2016	11	3579
5964	75	2016	12	2690
5965	75	2017	1	3168
5966	75	2017	2	3380
5967	75	2017	3	3422
5968	75	2017	4	3058
5969	75	2017	5	2898
5970	75	2017	6	2924
5971	75	2017	7	3195
5972	75	2017	8	3540
5973	75	2017	9	3489
5974	75	2017	10	3871
5975	75	2017	11	3536
5976	75	2017	12	2842
5977	75	2018	1	3379
5978	75	2018	2	3008
5979	75	2018	3	3506
5980	75	2018	4	2791
5981	75	2018	5	3143
5982	75	2018	6	3287
5983	75	2018	7	3227
5984	75	2018	8	3246
5985	75	2018	9	3412
5986	75	2018	10	3579
5987	75	2018	11	3797
5988	75	2018	12	2706
5989	75	2019	1	3025
5990	75	2019	2	2957
5991	75	2019	3	3254
5992	75	2019	4	2765
5993	75	2019	5	2996
5994	75	2019	6	3177
5995	75	2019	7	3248
5996	75	2019	8	3390
5997	75	2019	9	3398
5998	75	2019	10	3535
5999	75	2019	11	3650
6000	75	2019	12	2677
6001	75	2020	1	2383
6002	75	2020	2	2370
6003	75	2020	3	2645
6004	75	2020	4	2089
6005	75	2020	5	2168
6006	75	2020	6	2161
6007	75	2020	7	2384
6008	75	2020	8	2264
6009	75	2020	9	2313
6010	75	2020	10	2615
6011	75	2020	11	2613
6012	75	2020	12	2094
6013	75	2021	1	2858
6014	75	2021	2	2934
6015	75	2021	3	2814
6016	75	2021	4	2614
6017	75	2021	5	2616
6018	75	2021	6	2494
6019	75	2021	7	3053
6020	75	2021	8	2955
6021	75	2021	9	3122
6022	75	2021	10	3262
6023	75	2021	11	2955
6024	75	2021	12	2430
6025	75	2022	1	3033
6026	75	2022	2	2887
6027	75	2022	3	3727
6028	75	2022	4	2900
6029	75	2022	5	2878
6030	75	2022	6	3105
6031	75	2022	7	3277
6032	75	2022	8	3347
6033	75	2022	9	3400
6034	75	2022	10	3552
6035	75	2022	11	3715
6036	75	2022	12	2810
6037	75	2023	1	3340
6038	75	2023	2	3211
6039	75	2023	3	3312
6040	75	2023	4	2931
6041	75	2023	5	2960
6042	75	2023	6	3004
6043	75	2023	7	3433
6044	75	2023	8	3515
6045	75	2023	9	3547
6046	75	2023	10	3750
6047	75	2023	11	3421
6048	75	2023	12	2957
6049	75	2024	1	3935
6050	75	2024	2	3433
6051	75	2024	3	3905
6052	75	2024	4	3411
6053	75	2024	5	3619
6054	75	2024	6	3466
6055	75	2024	7	3839
6056	75	2024	8	3767
6057	75	2024	9	3838
6058	75	2024	10	4371
6059	75	2024	11	4041
6060	75	2024	12	2997
6061	75	2025	1	3497
6062	75	2025	2	3815
6063	75	2025	3	3948
6064	75	2025	4	3477
6065	75	2025	5	3423
6066	75	2025	6	3729
6067	75	2025	7	3607
6068	75	2025	8	3789
6069	75	2025	9	3932
6070	75	2025	10	4157
6071	75	2025	11	4028
6072	75	2025	12	3363
6073	75	2026	1	3666
6074	75	2026	2	3876
6075	75	2026	3	4129
6076	75	2026	4	3155
6077	75	2026	5	3635
6078	75	2026	6	3335
6079	76	2023	1	4537
6080	76	2023	2	3929
6081	76	2023	3	4783
6082	76	2023	4	3856
6083	76	2023	5	4120
6084	76	2023	6	4222
6085	76	2023	7	4423
6086	76	2023	8	4121
6087	76	2023	9	4750
6088	76	2023	10	4974
6089	76	2023	11	4733
6090	76	2023	12	3736
6091	76	2024	1	5041
6092	76	2024	2	5211
6093	76	2024	3	5604
6094	76	2024	4	4436
6095	76	2024	5	4316
6096	76	2024	6	5144
6097	76	2024	7	4623
6098	76	2024	8	5512
6099	76	2024	9	5034
6100	76	2024	10	5836
6101	76	2024	11	5859
6102	76	2024	12	4111
6103	76	2025	1	5119
6104	76	2025	2	5030
6105	76	2025	3	5599
6106	76	2025	4	4826
6107	76	2025	5	4573
6108	76	2025	6	4870
6109	76	2025	7	4630
6110	76	2025	8	5192
6111	76	2025	9	4933
6112	76	2025	10	6124
6113	76	2025	11	5490
6114	76	2025	12	4495
6115	76	2026	1	5362
6116	76	2026	2	5210
6117	76	2026	3	5255
6118	76	2026	4	4288
6119	76	2026	5	4766
6120	76	2026	6	4436
6121	77	2019	1	2511
6122	77	2019	2	2434
6123	77	2019	3	2677
6124	77	2019	4	2137
6125	77	2019	5	2386
6126	77	2019	6	2380
6127	77	2019	7	2539
6128	77	2019	8	2624
6129	77	2019	9	2502
6130	77	2019	10	2715
6131	77	2019	11	2627
6132	77	2019	12	2098
6133	77	2020	1	1790
6134	77	2020	2	1687
6135	77	2020	3	1814
6136	77	2020	4	1645
6137	77	2020	5	1606
6138	77	2020	6	1574
6139	77	2020	7	1729
6140	77	2020	8	1648
6141	77	2020	9	1972
6142	77	2020	10	1909
6143	77	2020	11	1976
6144	77	2020	12	1368
6145	77	2021	1	2178
6146	77	2021	2	2125
6147	77	2021	3	2111
6148	77	2021	4	1881
6149	77	2021	5	1855
6150	77	2021	6	1882
6151	77	2021	7	2007
6152	77	2021	8	2243
6153	77	2021	9	2235
6154	77	2021	10	2477
6155	77	2021	11	2218
6156	77	2021	12	1829
6157	77	2022	1	3209
6158	77	2022	2	3091
6159	77	2022	3	3610
6160	77	2022	4	3001
6161	77	2022	5	2827
6162	77	2022	6	3209
6163	77	2022	7	3055
6164	77	2022	8	3307
6165	77	2022	9	3419
6166	77	2022	10	3562
6167	77	2022	11	3290
6168	77	2022	12	2712
6169	77	2023	1	3294
6170	77	2023	2	3219
6171	77	2023	3	3726
6172	77	2023	4	3015
6173	77	2023	5	3142
6174	77	2023	6	3319
6175	77	2023	7	3324
6176	77	2023	8	3285
6177	77	2023	9	3212
6178	77	2023	10	3811
6179	77	2023	11	3471
6180	77	2023	12	2781
6181	77	2024	1	3766
6182	77	2024	2	3560
6183	77	2024	3	3919
6184	77	2024	4	3248
6185	77	2024	5	3523
6186	77	2024	6	3788
6187	77	2024	7	3478
6188	77	2024	8	4010
6189	77	2024	9	3831
6190	77	2024	10	4511
6191	77	2024	11	4321
6192	77	2024	12	3282
6193	77	2025	1	3584
6194	77	2025	2	3628
6195	77	2025	3	4023
6196	77	2025	4	3233
6197	77	2025	5	3657
6198	77	2025	6	3483
6199	77	2025	7	3616
6200	77	2025	8	4126
6201	77	2025	9	4138
6202	77	2025	10	4504
6203	77	2025	11	4342
6204	77	2025	12	3405
6205	77	2026	1	3589
6206	77	2026	2	3597
6207	77	2026	3	4255
6208	77	2026	4	3520
6209	77	2026	5	3264
6210	77	2026	6	3615
6211	78	2021	1	870
6212	78	2021	2	742
6213	78	2021	3	837
6214	78	2021	4	736
6215	78	2021	5	790
6216	78	2021	6	791
6217	78	2021	7	831
6218	78	2021	8	829
6219	78	2021	9	900
6220	78	2021	10	959
6221	78	2021	11	849
6222	78	2021	12	663
6223	78	2022	1	1167
6224	78	2022	2	1281
6225	78	2022	3	1264
6226	78	2022	4	1151
6227	78	2022	5	1193
6228	78	2022	6	1085
6229	78	2022	7	1173
6230	78	2022	8	1219
6231	78	2022	9	1267
6232	78	2022	10	1494
6233	78	2022	11	1297
6234	78	2022	12	1064
6235	78	2023	1	1276
6236	78	2023	2	1242
6237	78	2023	3	1228
6238	78	2023	4	1019
6239	78	2023	5	1132
6240	78	2023	6	1098
6241	78	2023	7	1218
6242	78	2023	8	1318
6243	78	2023	9	1345
6244	78	2023	10	1363
6245	78	2023	11	1231
6246	78	2023	12	965
6247	78	2024	1	1527
6248	78	2024	2	1413
6249	78	2024	3	1598
6250	78	2024	4	1280
6251	78	2024	5	1391
6252	78	2024	6	1322
6253	78	2024	7	1411
6254	78	2024	8	1523
6255	78	2024	9	1548
6256	78	2024	10	1586
6257	78	2024	11	1450
6258	78	2024	12	1203
6259	78	2025	1	1478
6260	78	2025	2	1363
6261	78	2025	3	1558
6262	78	2025	4	1173
6263	78	2025	5	1219
6264	78	2025	6	1333
6265	78	2025	7	1376
6266	78	2025	8	1544
6267	78	2025	9	1495
6268	78	2025	10	1625
6269	78	2025	11	1474
6270	78	2025	12	1124
6271	78	2026	1	1357
6272	78	2026	2	1431
6273	78	2026	3	1616
6274	78	2026	4	1203
6275	78	2026	5	1343
6276	78	2026	6	1291
6277	79	2020	1	179
6278	79	2020	2	179
6279	79	2020	3	197
6280	79	2020	4	172
6281	79	2020	5	161
6282	79	2020	6	178
6283	79	2020	7	179
6284	79	2020	8	189
6285	79	2020	9	194
6286	79	2020	10	204
6287	79	2020	11	203
6288	79	2020	12	148
6289	79	2021	1	220
6290	79	2021	2	201
6291	79	2021	3	223
6292	79	2021	4	188
6293	79	2021	5	218
6294	79	2021	6	209
6295	79	2021	7	205
6296	79	2021	8	239
6297	79	2021	9	225
6298	79	2021	10	250
6299	79	2021	11	234
6300	79	2021	12	190
6301	79	2022	1	332
6302	79	2022	2	325
6303	79	2022	3	385
6304	79	2022	4	316
6305	79	2022	5	318
6306	79	2022	6	329
6307	79	2022	7	337
6308	79	2022	8	323
6309	79	2022	9	337
6310	79	2022	10	358
6311	79	2022	11	344
6312	79	2022	12	277
6313	79	2023	1	340
6314	79	2023	2	343
6315	79	2023	3	342
6316	79	2023	4	304
6317	79	2023	5	304
6318	79	2023	6	322
6319	79	2023	7	320
6320	79	2023	8	354
6321	79	2023	9	377
6322	79	2023	10	373
6323	79	2023	11	380
6324	79	2023	12	304
6325	79	2024	1	398
6326	79	2024	2	403
6327	79	2024	3	389
6328	79	2024	4	335
6329	79	2024	5	375
6330	79	2024	6	348
6331	79	2024	7	385
6332	79	2024	8	430
6333	79	2024	9	388
6334	79	2024	10	416
6335	79	2024	11	460
6336	79	2024	12	344
6337	79	2025	1	399
6338	79	2025	2	383
6339	79	2025	3	393
6340	79	2025	4	375
6341	79	2025	5	355
6342	79	2025	6	353
6343	79	2025	7	376
6344	79	2025	8	423
6345	79	2025	9	404
6346	79	2025	10	451
6347	79	2025	11	432
6348	79	2025	12	353
6349	79	2026	1	365
6350	79	2026	2	406
6351	79	2026	3	433
6352	79	2026	4	330
6353	79	2026	5	381
6354	79	2026	6	393
6355	80	2023	1	1105
6356	80	2023	2	1030
6357	80	2023	3	1219
6358	80	2023	4	881
6359	80	2023	5	952
6360	80	2023	6	1001
6361	80	2023	7	1048
6362	80	2023	8	1076
6363	80	2023	9	1084
6364	80	2023	10	1219
6365	80	2023	11	1217
6366	80	2023	12	893
6367	80	2024	1	1283
6368	80	2024	2	1240
6369	80	2024	3	1247
6370	80	2024	4	1050
6371	80	2024	5	1119
6372	80	2024	6	1120
6373	80	2024	7	1229
6374	80	2024	8	1223
6375	80	2024	9	1261
6376	80	2024	10	1303
6377	80	2024	11	1405
6378	80	2024	12	990
6379	80	2025	1	1136
6380	80	2025	2	1163
6381	80	2025	3	1235
6382	80	2025	4	1167
6383	80	2025	5	1099
6384	80	2025	6	1166
6385	80	2025	7	1205
6386	80	2025	8	1254
6387	80	2025	9	1313
6388	80	2025	10	1366
6389	80	2025	11	1223
6390	80	2025	12	1081
6391	80	2026	1	1243
6392	80	2026	2	1255
6393	80	2026	3	1375
6394	80	2026	4	1129
6395	80	2026	5	1214
6396	80	2026	6	1207
6397	81	2020	1	397
6398	81	2020	2	404
6399	81	2020	3	409
6400	81	2020	4	372
6401	81	2020	5	366
6402	81	2020	6	369
6403	81	2020	7	370
6404	81	2020	8	418
6405	81	2020	9	433
6406	81	2020	10	489
6407	81	2020	11	424
6408	81	2020	12	364
6409	81	2021	1	484
6410	81	2021	2	488
6411	81	2021	3	488
6412	81	2021	4	429
6413	81	2021	5	443
6414	81	2021	6	431
6415	81	2021	7	510
6416	81	2021	8	523
6417	81	2021	9	516
6418	81	2021	10	525
6419	81	2021	11	540
6420	81	2021	12	397
6421	81	2022	1	584
6422	81	2022	2	502
6423	81	2022	3	632
6424	81	2022	4	512
6425	81	2022	5	545
6426	81	2022	6	541
6427	81	2022	7	531
6428	81	2022	8	606
6429	81	2022	9	607
6430	81	2022	10	631
6431	81	2022	11	603
6432	81	2022	12	507
6433	81	2023	1	759
6434	81	2023	2	786
6435	81	2023	3	797
6436	81	2023	4	732
6437	81	2023	5	754
6438	81	2023	6	761
6439	81	2023	7	837
6440	81	2023	8	747
6441	81	2023	9	853
6442	81	2023	10	922
6443	81	2023	11	796
6444	81	2023	12	681
6445	81	2024	1	899
6446	81	2024	2	866
6447	81	2024	3	970
6448	81	2024	4	819
6449	81	2024	5	768
6450	81	2024	6	822
6451	81	2024	7	833
6452	81	2024	8	876
6453	81	2024	9	917
6454	81	2024	10	1061
6455	81	2024	11	1029
6456	81	2024	12	774
6457	81	2025	1	911
6458	81	2025	2	861
6459	81	2025	3	1012
6460	81	2025	4	751
6461	81	2025	5	787
6462	81	2025	6	856
6463	81	2025	7	910
6464	81	2025	8	908
6465	81	2025	9	888
6466	81	2025	10	972
6467	81	2025	11	914
6468	81	2025	12	794
6469	81	2026	1	868
6470	81	2026	2	876
6471	81	2026	3	973
6472	81	2026	4	776
6473	81	2026	5	878
6474	81	2026	6	902
6475	82	2024	1	2058
6476	82	2024	2	1809
6477	82	2024	3	2225
6478	82	2024	4	1825
6479	82	2024	5	1755
6480	82	2024	6	1860
6481	82	2024	7	1894
6482	82	2024	8	1929
6483	82	2024	9	2176
6484	82	2024	10	2204
6485	82	2024	11	2158
6486	82	2024	12	1558
6487	82	2025	1	1859
6488	82	2025	2	1772
6489	82	2025	3	2141
6490	82	2025	4	1682
6491	82	2025	5	1690
6492	82	2025	6	1840
6493	82	2025	7	1912
6494	82	2025	8	2083
6495	82	2025	9	2190
6496	82	2025	10	2399
6497	82	2025	11	2199
6498	82	2025	12	1649
6499	82	2026	1	1903
6500	82	2026	2	1787
6501	82	2026	3	2076
6502	82	2026	4	1609
6503	82	2026	5	1887
6504	82	2026	6	1716
6505	83	2016	1	6619
6506	83	2016	2	6586
6507	83	2016	3	7519
6508	83	2016	4	5650
6509	83	2016	5	5795
6510	83	2016	6	6260
6511	83	2016	7	6650
6512	83	2016	8	6400
6513	83	2016	9	6719
6514	83	2016	10	7283
6515	83	2016	11	7454
6516	83	2016	12	5152
6517	83	2017	1	6755
6518	83	2017	2	6096
6519	83	2017	3	6632
6520	83	2017	4	5517
6521	83	2017	5	6078
6522	83	2017	6	6278
6523	83	2017	7	6466
6524	83	2017	8	7075
6525	83	2017	9	7193
6526	83	2017	10	7367
6527	83	2017	11	6639
6528	83	2017	12	5877
6529	83	2018	1	7155
6530	83	2018	2	6844
6531	83	2018	3	6701
6532	83	2018	4	5941
6533	83	2018	5	5913
6534	83	2018	6	6439
6535	83	2018	7	6119
6536	83	2018	8	6864
6537	83	2018	9	7131
6538	83	2018	10	8071
6539	83	2018	11	6915
6540	83	2018	12	5568
6541	83	2019	1	6571
6542	83	2019	2	6732
6543	83	2019	3	6471
6544	83	2019	4	5385
6545	83	2019	5	5724
6546	83	2019	6	6576
6547	83	2019	7	6341
6548	83	2019	8	6532
6549	83	2019	9	7248
6550	83	2019	10	7588
6551	83	2019	11	7614
6552	83	2019	12	5634
6553	83	2020	1	5054
6554	83	2020	2	4227
6555	83	2020	3	5338
6556	83	2020	4	4058
6557	83	2020	5	4189
6558	83	2020	6	4587
6559	83	2020	7	5033
6560	83	2020	8	5080
6561	83	2020	9	4604
6562	83	2020	10	5000
6563	83	2020	11	5171
6564	83	2020	12	3795
6565	83	2021	1	5929
6566	83	2021	2	5955
6567	83	2021	3	6324
6568	83	2021	4	5449
6569	83	2021	5	5587
6570	83	2021	6	5904
6571	83	2021	7	6163
6572	83	2021	8	5930
6573	83	2021	9	6182
6574	83	2021	10	6600
6575	83	2021	11	6624
6576	83	2021	12	4557
6577	83	2022	1	4475
6578	83	2022	2	4219
6579	83	2022	3	4869
6580	83	2022	4	3949
6581	83	2022	5	3968
6582	83	2022	6	4340
6583	83	2022	7	4257
6584	83	2022	8	4473
6585	83	2022	9	5070
6586	83	2022	10	5357
6587	83	2022	11	4756
6588	83	2022	12	3644
6589	83	2023	1	4514
6590	83	2023	2	4103
6591	83	2023	3	4863
6592	83	2023	4	3907
6593	83	2023	5	4289
6594	83	2023	6	4156
6595	83	2023	7	4650
6596	83	2023	8	4616
6597	83	2023	9	4969
6598	83	2023	10	5271
6599	83	2023	11	4754
6600	83	2023	12	3724
6601	83	2024	1	5033
6602	83	2024	2	5510
6603	83	2024	3	5688
6604	83	2024	4	4704
6605	83	2024	5	4698
6606	83	2024	6	5163
6607	83	2024	7	5018
6608	83	2024	8	5572
6609	83	2024	9	5389
6610	83	2024	10	6403
6611	83	2024	11	5931
6612	83	2024	12	4670
6613	83	2025	1	5428
6614	83	2025	2	4746
6615	83	2025	3	5987
6616	83	2025	4	4697
6617	83	2025	5	4771
6618	83	2025	6	5381
6619	83	2025	7	5302
6620	83	2025	8	5247
6621	83	2025	9	5410
6622	83	2025	10	5646
6623	83	2025	11	6113
6624	83	2025	12	4201
6625	83	2026	1	5203
6626	83	2026	2	5213
6627	83	2026	3	5664
6628	83	2026	4	4822
6629	83	2026	5	4606
6630	83	2026	6	5325
6631	84	2019	1	2724
6632	84	2019	2	2492
6633	84	2019	3	2622
6634	84	2019	4	2180
6635	84	2019	5	2511
6636	84	2019	6	2630
6637	84	2019	7	2491
6638	84	2019	8	2852
6639	84	2019	9	2704
6640	84	2019	10	2837
6641	84	2019	11	3080
6642	84	2019	12	2235
6643	84	2020	1	1868
6644	84	2020	2	1928
6645	84	2020	3	2031
6646	84	2020	4	1655
6647	84	2020	5	1874
6648	84	2020	6	1938
6649	84	2020	7	1948
6650	84	2020	8	1978
6651	84	2020	9	1976
6652	84	2020	10	2115
6653	84	2020	11	1933
6654	84	2020	12	1585
6655	84	2021	1	2167
6656	84	2021	2	2296
6657	84	2021	3	2333
6658	84	2021	4	1967
6659	84	2021	5	2316
6660	84	2021	6	2272
6661	84	2021	7	2291
6662	84	2021	8	2524
6663	84	2021	9	2400
6664	84	2021	10	2675
6665	84	2021	11	2656
6666	84	2021	12	1906
6667	84	2022	1	2467
6668	84	2022	2	2456
6669	84	2022	3	2917
6670	84	2022	4	2486
6671	84	2022	5	2294
6672	84	2022	6	2320
6673	84	2022	7	2795
6674	84	2022	8	2619
6675	84	2022	9	2835
6676	84	2022	10	2856
6677	84	2022	11	3080
6678	84	2022	12	2402
6679	84	2023	1	2505
6680	84	2023	2	2345
6681	84	2023	3	2724
6682	84	2023	4	2382
6683	84	2023	5	2565
6684	84	2023	6	2375
6685	84	2023	7	2575
6686	84	2023	8	2527
6687	84	2023	9	2664
6688	84	2023	10	3204
6689	84	2023	11	3049
6690	84	2023	12	2407
6691	84	2024	1	2979
6692	84	2024	2	2755
6693	84	2024	3	3349
6694	84	2024	4	2494
6695	84	2024	5	2742
6696	84	2024	6	2816
6697	84	2024	7	2869
6698	84	2024	8	3008
6699	84	2024	9	3114
6700	84	2024	10	3518
6701	84	2024	11	3285
6702	84	2024	12	2581
6703	84	2025	1	2937
6704	84	2025	2	2723
6705	84	2025	3	3231
6706	84	2025	4	2590
6707	84	2025	5	3030
6708	84	2025	6	2707
6709	84	2025	7	3065
6710	84	2025	8	3212
6711	84	2025	9	3233
6712	84	2025	10	3215
6713	84	2025	11	3253
6714	84	2025	12	2753
6715	84	2026	1	3162
6716	84	2026	2	3040
6717	84	2026	3	3118
6718	84	2026	4	2902
6719	84	2026	5	2931
6720	84	2026	6	2730
6721	85	2021	1	1740
6722	85	2021	2	1819
6723	85	2021	3	1953
6724	85	2021	4	1535
6725	85	2021	5	1720
6726	85	2021	6	1618
6727	85	2021	7	1680
6728	85	2021	8	1936
6729	85	2021	9	1735
6730	85	2021	10	1964
6731	85	2021	11	1795
6732	85	2021	12	1415
6733	85	2022	1	2786
6734	85	2022	2	2786
6735	85	2022	3	2906
6736	85	2022	4	2504
6737	85	2022	5	2473
6738	85	2022	6	2436
6739	85	2022	7	2632
6740	85	2022	8	2675
6741	85	2022	9	3077
6742	85	2022	10	3298
6743	85	2022	11	3130
6744	85	2022	12	2162
6745	85	2023	1	2649
6746	85	2023	2	2795
6747	85	2023	3	3003
6748	85	2023	4	2359
6749	85	2023	5	2713
6750	85	2023	6	2579
6751	85	2023	7	2905
6752	85	2023	8	2745
6753	85	2023	9	2773
6754	85	2023	10	3256
6755	85	2023	11	2754
6756	85	2023	12	2412
6757	85	2024	1	3073
6758	85	2024	2	3229
6759	85	2024	3	3154
6760	85	2024	4	2791
6761	85	2024	5	2734
6762	85	2024	6	2881
6763	85	2024	7	2888
6764	85	2024	8	3262
6765	85	2024	9	3432
6766	85	2024	10	3796
6767	85	2024	11	3238
6768	85	2024	12	2717
6769	85	2025	1	2958
6770	85	2025	2	3137
6771	85	2025	3	3307
6772	85	2025	4	2758
6773	85	2025	5	2996
6774	85	2025	6	3091
6775	85	2025	7	2953
6776	85	2025	8	3350
6777	85	2025	9	3374
6778	85	2025	10	3575
6779	85	2025	11	3669
6780	85	2025	12	2703
6781	85	2026	1	3096
6782	85	2026	2	3148
6783	85	2026	3	3332
6784	85	2026	4	2580
6785	85	2026	5	3032
6786	85	2026	6	2753
6787	86	2016	1	1431
6788	86	2016	2	1353
6789	86	2016	3	1745
6790	86	2016	4	1366
6791	86	2016	5	1514
6792	86	2016	6	1447
6793	86	2016	7	1492
6794	86	2016	8	1432
6795	86	2016	9	1529
6796	86	2016	10	1612
6797	86	2016	11	1660
6798	86	2016	12	1237
6799	86	2017	1	1508
6800	86	2017	2	1447
6801	86	2017	3	1709
6802	86	2017	4	1277
6803	86	2017	5	1314
6804	86	2017	6	1515
6805	86	2017	7	1634
6806	86	2017	8	1611
6807	86	2017	9	1495
6808	86	2017	10	1611
6809	86	2017	11	1601
6810	86	2017	12	1267
6811	86	2018	1	1482
6812	86	2018	2	1390
6813	86	2018	3	1577
6814	86	2018	4	1371
6815	86	2018	5	1436
6816	86	2018	6	1546
6817	86	2018	7	1491
6818	86	2018	8	1640
6819	86	2018	9	1654
6820	86	2018	10	1816
6821	86	2018	11	1639
6822	86	2018	12	1203
6823	86	2019	1	1618
6824	86	2019	2	1584
6825	86	2019	3	1731
6826	86	2019	4	1399
6827	86	2019	5	1359
6828	86	2019	6	1501
6829	86	2019	7	1455
6830	86	2019	8	1632
6831	86	2019	9	1688
6832	86	2019	10	1829
6833	86	2019	11	1693
6834	86	2019	12	1187
6835	86	2020	1	1016
6836	86	2020	2	987
6837	86	2020	3	1080
6838	86	2020	4	1017
6839	86	2020	5	948
6840	86	2020	6	1018
6841	86	2020	7	1040
6842	86	2020	8	1100
6843	86	2020	9	1097
6844	86	2020	10	1304
6845	86	2020	11	1131
6846	86	2020	12	862
6847	86	2021	1	1335
6848	86	2021	2	1270
6849	86	2021	3	1418
6850	86	2021	4	1123
6851	86	2021	5	1208
6852	86	2021	6	1323
6853	86	2021	7	1303
6854	86	2021	8	1346
6855	86	2021	9	1322
6856	86	2021	10	1435
6857	86	2021	11	1436
6858	86	2021	12	1089
6859	86	2022	1	1909
6860	86	2022	2	1829
6861	86	2022	3	2125
6862	86	2022	4	1872
6863	86	2022	5	1954
6864	86	2022	6	1944
6865	86	2022	7	2020
6866	86	2022	8	2073
6867	86	2022	9	2277
6868	86	2022	10	2494
6869	86	2022	11	2279
6870	86	2022	12	1755
6871	87	2016	1	203
6872	87	2016	2	198
6873	87	2016	3	217
6874	87	2016	4	174
6875	87	2016	5	198
6876	87	2016	6	188
6877	87	2016	7	186
6878	87	2016	8	190
6879	87	2016	9	216
6880	87	2016	10	235
6881	87	2016	11	236
6882	87	2016	12	174
6883	87	2017	1	206
6884	87	2017	2	207
6885	87	2017	3	222
6886	87	2017	4	185
6887	87	2017	5	199
6888	87	2017	6	203
6889	87	2017	7	204
6890	87	2017	8	194
6891	87	2017	9	220
6892	87	2017	10	221
6893	87	2017	11	203
6894	87	2017	12	179
6895	87	2018	1	218
6896	87	2018	2	189
6897	87	2018	3	199
6898	87	2018	4	165
6899	87	2018	5	181
6900	87	2018	6	194
6901	87	2018	7	192
6902	87	2018	8	206
6903	87	2018	9	204
6904	87	2018	10	247
6905	87	2018	11	227
6906	87	2018	12	172
6907	87	2019	1	206
6908	87	2019	2	183
6909	87	2019	3	218
6910	87	2019	4	193
6911	87	2019	5	179
6912	87	2019	6	177
6913	87	2019	7	215
6914	87	2019	8	220
6915	87	2019	9	222
6916	87	2019	10	246
6917	87	2019	11	227
6918	87	2019	12	179
6919	87	2020	1	155
6920	87	2020	2	135
6921	87	2020	3	151
6922	87	2020	4	128
6923	87	2020	5	138
6924	87	2020	6	129
6925	87	2020	7	147
6926	87	2020	8	153
6927	87	2020	9	143
6928	87	2020	10	158
6929	87	2020	11	160
6930	87	2020	12	125
6931	88	2017	1	243
6932	88	2017	2	236
6933	88	2017	3	278
6934	88	2017	4	232
6935	88	2017	5	219
6936	88	2017	6	258
6937	88	2017	7	259
6938	88	2017	8	254
6939	88	2017	9	273
6940	88	2017	10	271
6941	88	2017	11	263
6942	88	2017	12	223
6943	88	2018	1	249
6944	88	2018	2	259
6945	88	2018	3	275
6946	88	2018	4	234
6947	88	2018	5	219
6948	88	2018	6	233
6949	88	2018	7	238
6950	88	2018	8	240
6951	88	2018	9	268
6952	88	2018	10	269
6953	88	2018	11	276
6954	88	2018	12	224
6955	88	2019	1	244
6956	88	2019	2	235
6957	88	2019	3	259
6958	88	2019	4	226
6959	88	2019	5	252
6960	88	2019	6	242
6961	88	2019	7	248
6962	88	2019	8	267
6963	88	2019	9	268
6964	88	2019	10	292
6965	88	2019	11	293
6966	88	2019	12	229
6967	88	2020	1	170
6968	88	2020	2	164
6969	88	2020	3	207
6970	88	2020	4	157
6971	88	2020	5	163
6972	88	2020	6	174
6973	88	2020	7	195
6974	88	2020	8	196
6975	88	2020	9	189
6976	88	2020	10	215
6977	88	2020	11	208
6978	88	2020	12	160
6979	89	2016	1	378
6980	89	2016	2	397
6981	89	2016	3	449
6982	89	2016	4	335
6983	89	2016	5	349
6984	89	2016	6	363
6985	89	2016	7	396
6986	89	2016	8	430
6987	89	2016	9	399
6988	89	2016	10	487
6989	89	2016	11	452
6990	89	2016	12	340
6991	89	2017	1	427
6992	89	2017	2	397
6993	89	2017	3	440
6994	89	2017	4	357
6995	89	2017	5	402
6996	89	2017	6	366
6997	89	2017	7	434
6998	89	2017	8	408
6999	89	2017	9	432
7000	89	2017	10	427
7001	89	2017	11	434
7002	89	2017	12	361
7003	89	2018	1	392
7004	89	2018	2	409
7005	89	2018	3	446
7006	89	2018	4	333
7007	89	2018	5	405
7008	89	2018	6	376
7009	89	2018	7	413
7010	89	2018	8	399
7011	89	2018	9	394
7012	89	2018	10	488
7013	89	2018	11	444
7014	89	2018	12	356
7015	89	2019	1	431
7016	89	2019	2	370
7017	89	2019	3	454
7018	89	2019	4	386
7019	89	2019	5	350
7020	89	2019	6	371
7021	89	2019	7	421
7022	89	2019	8	410
7023	89	2019	9	417
7024	89	2019	10	478
7025	89	2019	11	461
7026	89	2019	12	363
7027	89	2020	1	302
7028	89	2020	2	265
7029	89	2020	3	303
7030	89	2020	4	267
7031	89	2020	5	280
7032	89	2020	6	275
7033	89	2020	7	283
7034	89	2020	8	292
7035	89	2020	9	285
7036	89	2020	10	349
7037	89	2020	11	311
7038	89	2020	12	260
7039	90	2016	1	310
7040	90	2016	2	310
7041	90	2016	3	323
7042	90	2016	4	276
7043	90	2016	5	266
7044	90	2016	6	301
7045	90	2016	7	282
7046	90	2016	8	307
7047	90	2016	9	316
7048	90	2016	10	369
7049	90	2016	11	329
7050	90	2016	12	264
7051	90	2017	1	290
7052	90	2017	2	297
7053	90	2017	3	317
7054	90	2017	4	249
7055	90	2017	5	294
7056	90	2017	6	299
7057	90	2017	7	299
7058	90	2017	8	285
7059	90	2017	9	334
7060	90	2017	10	348
7061	90	2017	11	304
7062	90	2017	12	276
7063	90	2018	1	320
7064	90	2018	2	315
7065	90	2018	3	314
7066	90	2018	4	277
7067	90	2018	5	292
7068	90	2018	6	277
7069	90	2018	7	297
7070	90	2018	8	331
7071	90	2018	9	322
7072	90	2018	10	364
7073	90	2018	11	349
7074	90	2018	12	263
7075	90	2019	1	311
7076	90	2019	2	315
7077	90	2019	3	345
7078	90	2019	4	257
7079	90	2019	5	286
7080	90	2019	6	299
7081	90	2019	7	297
7082	90	2019	8	293
7083	90	2019	9	316
7084	90	2019	10	366
7085	90	2019	11	312
7086	90	2019	12	257
7087	90	2020	1	214
7088	90	2020	2	198
7089	90	2020	3	238
7090	90	2020	4	200
7091	90	2020	5	198
7092	90	2020	6	200
7093	90	2020	7	232
7094	90	2020	8	230
7095	90	2020	9	217
7096	90	2020	10	243
7097	90	2020	11	224
7098	90	2020	12	199
7099	91	2016	1	333
7100	91	2016	2	367
7101	91	2016	3	361
7102	91	2016	4	317
7103	91	2016	5	338
7104	91	2016	6	325
7105	91	2016	7	330
7106	91	2016	8	385
7107	91	2016	9	347
7108	91	2016	10	370
7109	91	2016	11	397
7110	91	2016	12	298
7111	91	2017	1	371
7112	91	2017	2	316
7113	91	2017	3	405
7114	91	2017	4	333
7115	91	2017	5	340
7116	91	2017	6	344
7117	91	2017	7	374
7118	91	2017	8	351
7119	91	2017	9	342
7120	91	2017	10	422
7121	91	2017	11	414
7122	91	2017	12	306
7123	91	2018	1	347
7124	91	2018	2	360
7125	91	2018	3	385
7126	91	2018	4	312
7127	91	2018	5	324
7128	91	2018	6	328
7129	91	2018	7	337
7130	91	2018	8	349
7131	91	2018	9	345
7132	91	2018	10	379
7133	91	2018	11	366
7134	91	2018	12	323
7135	91	2019	1	349
7136	91	2019	2	368
7137	91	2019	3	392
7138	91	2019	4	324
7139	91	2019	5	348
7140	91	2019	6	359
7141	91	2019	7	336
7142	91	2019	8	332
7143	91	2019	9	396
7144	91	2019	10	384
7145	91	2019	11	411
7146	91	2019	12	320
7147	91	2020	1	253
7148	91	2020	2	248
7149	91	2020	3	275
7150	91	2020	4	232
7151	91	2020	5	223
7152	91	2020	6	226
7153	91	2020	7	241
7154	91	2020	8	279
7155	91	2020	9	262
7156	91	2020	10	275
7157	91	2020	11	298
7158	91	2020	12	214
7159	92	2020	1	1777
7160	92	2020	2	1922
7161	92	2020	3	2095
7162	92	2020	4	1812
7163	92	2020	5	1792
7164	92	2020	6	1884
7165	92	2020	7	1782
7166	92	2020	8	1968
7167	92	2020	9	1872
7168	92	2020	10	2178
7169	92	2020	11	2010
7170	92	2020	12	1684
7171	92	2021	1	2464
7172	92	2021	2	2248
7173	92	2021	3	2564
7174	92	2021	4	2057
7175	92	2021	5	2284
7176	92	2021	6	2221
7177	92	2021	7	2353
7178	92	2021	8	2439
7179	92	2021	9	2574
7180	92	2021	10	2536
7181	92	2021	11	2347
7182	92	2021	12	1926
7183	92	2022	1	3517
7184	92	2022	2	3305
7185	92	2022	3	3630
7186	92	2022	4	3163
7187	92	2022	5	3410
7188	92	2022	6	3134
7189	92	2022	7	3534
7190	92	2022	8	3869
7191	92	2022	9	3831
7192	92	2022	10	3722
7193	92	2022	11	4085
7194	92	2022	12	2866
7195	92	2023	1	3372
7196	92	2023	2	3680
7197	92	2023	3	3964
7198	92	2023	4	3095
7199	92	2023	5	3477
7200	92	2023	6	3399
7201	92	2023	7	3358
7202	92	2023	8	3640
7203	92	2023	9	3693
7204	92	2023	10	4233
7205	92	2023	11	3791
7206	92	2023	12	2863
7207	92	2024	1	4071
7208	92	2024	2	4159
7209	92	2024	3	4136
7210	92	2024	4	3816
7211	92	2024	5	3791
7212	92	2024	6	4037
7213	92	2024	7	4344
7214	92	2024	8	4252
7215	92	2024	9	4577
7216	92	2024	10	4298
7217	92	2024	11	4454
7218	92	2024	12	3583
7219	92	2025	1	3853
7220	92	2025	2	4214
7221	92	2025	3	4277
7222	92	2025	4	3509
7223	92	2025	5	3990
7224	92	2025	6	3906
7225	92	2025	7	4023
7226	92	2025	8	4384
7227	92	2025	9	4611
7228	92	2025	10	4636
7229	92	2025	11	4480
7230	92	2025	12	3414
7231	92	2026	1	4115
7232	92	2026	2	3696
7233	92	2026	3	4541
7234	92	2026	4	3673
7235	92	2026	5	3762
7236	92	2026	6	3597
7237	93	2019	1	296
7238	93	2019	2	301
7239	93	2019	3	330
7240	93	2019	4	291
7241	93	2019	5	294
7242	93	2019	6	275
7243	93	2019	7	316
7244	93	2019	8	318
7245	93	2019	9	338
7246	93	2019	10	328
7247	93	2019	11	316
7248	93	2019	12	251
7249	93	2020	1	223
7250	93	2020	2	228
7251	93	2020	3	215
7252	93	2020	4	205
7253	93	2020	5	203
7254	93	2020	6	217
7255	93	2020	7	226
7256	93	2020	8	206
7257	93	2020	9	218
7258	93	2020	10	245
7259	93	2020	11	229
7260	93	2020	12	199
7261	93	2021	1	274
7262	93	2021	2	277
7263	93	2021	3	304
7264	93	2021	4	247
7265	93	2021	5	262
7266	93	2021	6	258
7267	93	2021	7	264
7268	93	2021	8	252
7269	93	2021	9	289
7270	93	2021	10	317
7271	93	2021	11	282
7272	93	2021	12	242
7273	93	2022	1	387
7274	93	2022	2	414
7275	93	2022	3	416
7276	93	2022	4	369
7277	93	2022	5	352
7278	93	2022	6	403
7279	93	2022	7	395
7280	93	2022	8	428
7281	93	2022	9	448
7282	93	2022	10	495
7283	93	2022	11	436
7284	93	2022	12	354
7285	93	2023	1	407
7286	93	2023	2	398
7287	93	2023	3	468
7288	93	2023	4	353
7289	93	2023	5	398
7290	93	2023	6	378
7291	93	2023	7	409
7292	93	2023	8	416
7293	93	2023	9	435
7294	93	2023	10	482
7295	93	2023	11	466
7296	93	2023	12	340
7297	94	2016	1	1138
7298	94	2016	2	1191
7299	94	2016	3	1380
7300	94	2016	4	1118
7301	94	2016	5	1199
7302	94	2016	6	1209
7303	94	2016	7	1277
7304	94	2016	8	1225
7305	94	2016	9	1348
7306	94	2016	10	1441
7307	94	2016	11	1247
7308	94	2016	12	987
7309	94	2017	1	1126
7310	94	2017	2	1123
7311	94	2017	3	1332
7312	94	2017	4	1123
7313	94	2017	5	1052
7314	94	2017	6	1216
7315	94	2017	7	1304
7316	94	2017	8	1137
7317	94	2017	9	1204
7318	94	2017	10	1403
7319	94	2017	11	1317
7320	94	2017	12	1085
7321	94	2018	1	1161
7322	94	2018	2	1230
7323	94	2018	3	1381
7324	94	2018	4	1133
7325	94	2018	5	1192
7326	94	2018	6	1233
7327	94	2018	7	1277
7328	94	2018	8	1301
7329	94	2018	9	1262
7330	94	2018	10	1447
7331	94	2018	11	1303
7332	94	2018	12	964
7333	94	2019	1	1178
7334	94	2019	2	1118
7335	94	2019	3	1298
7336	94	2019	4	1133
7337	94	2019	5	1123
7338	94	2019	6	1103
7339	94	2019	7	1257
7340	94	2019	8	1226
7341	94	2019	9	1320
7342	94	2019	10	1402
7343	94	2019	11	1228
7344	94	2019	12	1083
7345	94	2020	1	875
7346	94	2020	2	791
7347	94	2020	3	891
7348	94	2020	4	775
7349	94	2020	5	870
7350	94	2020	6	773
7351	94	2020	7	934
7352	94	2020	8	960
7353	94	2020	9	953
7354	94	2020	10	1060
7355	94	2020	11	1015
7356	94	2020	12	741
7357	94	2021	1	1024
7358	94	2021	2	1039
7359	94	2021	3	1100
7360	94	2021	4	988
7361	94	2021	5	1021
7362	94	2021	6	1019
7363	94	2021	7	1088
7364	94	2021	8	1134
7365	94	2021	9	1135
7366	94	2021	10	1243
7367	94	2021	11	1098
7368	94	2021	12	973
7369	95	2022	1	1578
7370	95	2022	2	1570
7371	95	2022	3	1853
7372	95	2022	4	1388
7373	95	2022	5	1398
7374	95	2022	6	1535
7375	95	2022	7	1606
7376	95	2022	8	1778
7377	95	2022	9	1703
7378	95	2022	10	1765
7379	95	2022	11	1673
7380	95	2022	12	1365
7381	95	2023	1	1507
7382	95	2023	2	1692
7383	95	2023	3	1621
7384	95	2023	4	1471
7385	95	2023	5	1475
7386	95	2023	6	1502
7387	95	2023	7	1552
7388	95	2023	8	1641
7389	95	2023	9	1784
7390	95	2023	10	1761
7391	95	2023	11	1708
7392	95	2023	12	1365
7393	95	2024	1	1801
7394	95	2024	2	1808
7395	95	2024	3	1877
7396	95	2024	4	1629
7397	95	2024	5	1592
7398	95	2024	6	1659
7399	95	2024	7	1844
7400	95	2024	8	1862
7401	95	2024	9	1844
7402	95	2024	10	2116
7403	95	2024	11	1931
7404	95	2024	12	1600
7405	95	2025	1	1925
7406	95	2025	2	1703
7407	95	2025	3	1906
7408	95	2025	4	1689
7409	95	2025	5	1771
7410	95	2025	6	1741
7411	95	2025	7	1978
7412	95	2025	8	2019
7413	95	2025	9	1981
7414	95	2025	10	2177
7415	95	2025	11	1879
7416	95	2025	12	1490
7417	95	2026	1	1961
7418	95	2026	2	1816
7419	95	2026	3	2042
7420	95	2026	4	1541
7421	95	2026	5	1711
7422	95	2026	6	1871
7423	96	2024	1	2225
7424	96	2024	2	2411
7425	96	2024	3	2341
7426	96	2024	4	2215
7427	96	2024	5	2349
7428	96	2024	6	2261
7429	96	2024	7	2215
7430	96	2024	8	2253
7431	96	2024	9	2556
7432	96	2024	10	2699
7433	96	2024	11	2625
7434	96	2024	12	1872
7435	96	2025	1	2435
7436	96	2025	2	2385
7437	96	2025	3	2402
7438	96	2025	4	2121
7439	96	2025	5	2320
7440	96	2025	6	2396
7441	96	2025	7	2488
7442	96	2025	8	2457
7443	96	2025	9	2548
7444	96	2025	10	2853
7445	96	2025	11	2390
7446	96	2025	12	2156
7447	96	2026	1	2438
7448	96	2026	2	2191
7449	96	2026	3	2489
7450	96	2026	4	2213
7451	96	2026	5	2309
7452	96	2026	6	2379
7453	97	2021	1	1646
7454	97	2021	2	1630
7455	97	2021	3	1795
7456	97	2021	4	1443
7457	97	2021	5	1562
7458	97	2021	6	1489
7459	97	2021	7	1515
7460	97	2021	8	1566
7461	97	2021	9	1638
7462	97	2021	10	1688
7463	97	2021	11	1645
7464	97	2021	12	1346
7465	97	2022	1	2488
7466	97	2022	2	2225
7467	97	2022	3	2415
7468	97	2022	4	2136
7469	97	2022	5	2145
7470	97	2022	6	2324
7471	97	2022	7	2274
7472	97	2022	8	2657
7473	97	2022	9	2418
7474	97	2022	10	2669
7475	97	2022	11	2475
7476	97	2022	12	2059
7477	97	2023	1	2520
7478	97	2023	2	2365
7479	97	2023	3	2445
7480	97	2023	4	2244
7481	97	2023	5	2437
7482	97	2023	6	2407
7483	97	2023	7	2388
7484	97	2023	8	2348
7485	97	2023	9	2404
7486	97	2023	10	2775
7487	97	2023	11	2743
7488	97	2023	12	1988
7489	97	2024	1	2988
7490	97	2024	2	2861
7491	97	2024	3	3242
7492	97	2024	4	2667
7493	97	2024	5	2574
7494	97	2024	6	2632
7495	97	2024	7	2890
7496	97	2024	8	2948
7497	97	2024	9	2766
7498	97	2024	10	2982
7499	97	2024	11	3227
7500	97	2024	12	2300
7501	97	2025	1	2866
7502	97	2025	2	2755
7503	97	2025	3	3063
7504	97	2025	4	2405
7505	97	2025	5	2671
7506	97	2025	6	2774
7507	97	2025	7	2603
7508	97	2025	8	3058
7509	97	2025	9	2873
7510	97	2025	10	3257
7511	97	2025	11	3028
7512	97	2025	12	2534
7513	97	2026	1	2690
7514	97	2026	2	2624
7515	97	2026	3	3236
7516	97	2026	4	2467
7517	97	2026	5	2665
7518	97	2026	6	2808
7519	98	2016	1	52
7520	98	2016	2	45
7521	98	2016	3	55
7522	98	2016	4	45
7523	98	2016	5	44
7524	98	2016	6	44
7525	98	2016	7	53
7526	98	2016	8	51
7527	98	2016	9	54
7528	98	2016	10	58
7529	98	2016	11	50
7530	98	2016	12	45
7531	98	2017	1	50
7532	98	2017	2	52
7533	98	2017	3	57
7534	98	2017	4	47
7535	98	2017	5	47
7536	98	2017	6	48
7537	98	2017	7	49
7538	98	2017	8	48
7539	98	2017	9	48
7540	98	2017	10	60
7541	98	2017	11	50
7542	98	2017	12	44
7543	99	2016	1	203
7544	99	2016	2	189
7545	99	2016	3	205
7546	99	2016	4	170
7547	99	2016	5	188
7548	99	2016	6	191
7549	99	2016	7	197
7550	99	2016	8	209
7551	99	2016	9	219
7552	99	2016	10	244
7553	99	2016	11	236
7554	99	2016	12	165
7555	99	2017	1	210
7556	99	2017	2	202
7557	99	2017	3	208
7558	99	2017	4	181
7559	99	2017	5	202
7560	99	2017	6	178
7561	99	2017	7	192
7562	99	2017	8	194
7563	99	2017	9	200
7564	99	2017	10	243
7565	99	2017	11	229
7566	99	2017	12	183
7567	99	2018	1	220
7568	99	2018	2	180
7569	99	2018	3	227
7570	99	2018	4	187
7571	99	2018	5	183
7572	99	2018	6	184
7573	99	2018	7	210
7574	99	2018	8	217
7575	99	2018	9	220
7576	99	2018	10	245
7577	99	2018	11	236
7578	99	2018	12	167
7579	99	2019	1	217
7580	99	2019	2	209
7581	99	2019	3	229
7582	99	2019	4	175
7583	99	2019	5	198
7584	99	2019	6	195
7585	99	2019	7	213
7586	99	2019	8	214
7587	99	2019	9	213
7588	99	2019	10	242
7589	99	2019	11	225
7590	99	2019	12	175
7591	99	2020	1	146
7592	99	2020	2	131
7593	99	2020	3	159
7594	99	2020	4	126
7595	99	2020	5	141
7596	99	2020	6	146
7597	99	2020	7	135
7598	99	2020	8	142
7599	99	2020	9	151
7600	99	2020	10	173
7601	99	2020	11	149
7602	99	2020	12	126
7603	99	2021	1	182
7604	99	2021	2	164
7605	99	2021	3	182
7606	99	2021	4	158
7607	99	2021	5	178
7608	99	2021	6	159
7609	99	2021	7	188
7610	99	2021	8	181
7611	99	2021	9	199
7612	99	2021	10	190
7613	99	2021	11	190
7614	99	2021	12	142
7615	99	2022	1	200
7616	99	2022	2	206
7617	99	2022	3	233
7618	99	2022	4	186
7619	99	2022	5	184
7620	99	2022	6	187
7621	99	2022	7	187
7622	99	2022	8	215
7623	99	2022	9	206
7624	99	2022	10	243
7625	99	2022	11	237
7626	99	2022	12	182
7627	99	2023	1	213
7628	99	2023	2	202
7629	99	2023	3	220
7630	99	2023	4	189
7631	99	2023	5	202
7632	99	2023	6	181
7633	99	2023	7	198
7634	99	2023	8	194
7635	99	2023	9	205
7636	99	2023	10	239
7637	99	2023	11	205
7638	99	2023	12	181
7639	100	2016	1	146
7640	100	2016	2	137
7641	100	2016	3	152
7642	100	2016	4	129
7643	100	2016	5	137
7644	100	2016	6	151
7645	100	2016	7	142
7646	100	2016	8	156
7647	100	2016	9	149
7648	100	2016	10	169
7649	100	2016	11	169
7650	100	2016	12	120
7651	100	2017	1	149
7652	100	2017	2	143
7653	100	2017	3	168
7654	100	2017	4	134
7655	100	2017	5	149
7656	100	2017	6	133
7657	100	2017	7	156
7658	100	2017	8	162
7659	100	2017	9	152
7660	100	2017	10	184
7661	100	2017	11	163
7662	100	2017	12	130
7663	100	2018	1	159
7664	100	2018	2	149
7665	100	2018	3	155
7666	100	2018	4	134
7667	100	2018	5	137
7668	100	2018	6	140
7669	100	2018	7	153
7670	100	2018	8	150
7671	100	2018	9	165
7672	100	2018	10	169
7673	100	2018	11	170
7674	100	2018	12	131
7675	100	2019	1	158
7676	100	2019	2	137
7677	100	2019	3	168
7678	100	2019	4	131
7679	100	2019	5	149
7680	100	2019	6	155
7681	100	2019	7	163
7682	100	2019	8	146
7683	100	2019	9	168
7684	100	2019	10	162
7685	100	2019	11	154
7686	100	2019	12	131
7687	100	2020	1	107
7688	100	2020	2	110
7689	100	2020	3	125
7690	100	2020	4	89
7691	100	2020	5	96
7692	100	2020	6	103
7693	100	2020	7	110
7694	100	2020	8	118
7695	100	2020	9	114
7696	100	2020	10	129
7697	100	2020	11	121
7698	100	2020	12	87
7699	100	2021	1	128
7700	100	2021	2	122
7701	100	2021	3	153
7702	100	2021	4	113
7703	100	2021	5	126
7704	100	2021	6	134
7705	100	2021	7	140
7706	100	2021	8	131
7707	100	2021	9	150
7708	100	2021	10	156
7709	100	2021	11	155
7710	100	2021	12	120
7711	100	2022	1	160
7712	100	2022	2	157
7713	100	2022	3	149
7714	100	2022	4	131
7715	100	2022	5	149
7716	100	2022	6	139
7717	100	2022	7	153
7718	100	2022	8	154
7719	100	2022	9	149
7720	100	2022	10	178
7721	100	2022	11	165
7722	100	2022	12	124
7723	100	2023	1	156
7724	100	2023	2	153
7725	100	2023	3	157
7726	100	2023	4	138
7727	100	2023	5	130
7728	100	2023	6	135
7729	100	2023	7	144
7730	100	2023	8	155
7731	100	2023	9	158
7732	100	2023	10	160
7733	100	2023	11	178
7734	100	2023	12	119
7735	100	2024	1	179
7736	100	2024	2	167
7737	100	2024	3	199
7738	100	2024	4	156
7739	100	2024	5	173
7740	100	2024	6	170
7741	100	2024	7	184
7742	100	2024	8	180
7743	100	2024	9	184
7744	100	2024	10	210
7745	100	2024	11	182
7746	100	2024	12	152
7747	101	2017	1	189
7748	101	2017	2	200
7749	101	2017	3	232
7750	101	2017	4	170
7751	101	2017	5	198
7752	101	2017	6	198
7753	101	2017	7	196
7754	101	2017	8	204
7755	101	2017	9	209
7756	101	2017	10	230
7757	101	2017	11	214
7758	101	2017	12	183
7759	101	2018	1	205
7760	101	2018	2	189
7761	101	2018	3	221
7762	101	2018	4	187
7763	101	2018	5	197
7764	101	2018	6	181
7765	101	2018	7	213
7766	101	2018	8	218
7767	101	2018	9	222
7768	101	2018	10	230
7769	101	2018	11	206
7770	101	2018	12	173
7771	101	2019	1	211
7772	101	2019	2	180
7773	101	2019	3	203
7774	101	2019	4	179
7775	101	2019	5	178
7776	101	2019	6	187
7777	101	2019	7	212
7778	101	2019	8	191
7779	101	2019	9	199
7780	101	2019	10	221
7781	101	2019	11	226
7782	101	2019	12	162
7783	101	2020	1	138
7784	101	2020	2	141
7785	101	2020	3	148
7786	101	2020	4	119
7787	101	2020	5	133
7788	101	2020	6	132
7789	101	2020	7	134
7790	101	2020	8	140
7791	101	2020	9	163
7792	101	2020	10	170
7793	101	2020	11	164
7794	101	2020	12	123
7795	101	2021	1	166
7796	101	2021	2	162
7797	101	2021	3	198
7798	101	2021	4	152
7799	101	2021	5	159
7800	101	2021	6	174
7801	101	2021	7	182
7802	101	2021	8	183
7803	101	2021	9	172
7804	101	2021	10	200
7805	101	2021	11	188
7806	101	2021	12	159
7807	101	2022	1	279
7808	101	2022	2	251
7809	101	2022	3	297
7810	101	2022	4	233
7811	101	2022	5	252
7812	101	2022	6	255
7813	101	2022	7	290
7814	101	2022	8	295
7815	101	2022	9	272
7816	101	2022	10	302
7817	101	2022	11	289
7818	101	2022	12	238
7819	101	2023	1	277
7820	101	2023	2	260
7821	101	2023	3	286
7822	101	2023	4	255
7823	101	2023	5	254
7824	101	2023	6	278
7825	101	2023	7	267
7826	101	2023	8	272
7827	101	2023	9	304
7828	101	2023	10	286
7829	101	2023	11	317
7830	101	2023	12	249
7831	101	2024	1	310
7832	101	2024	2	292
7833	101	2024	3	326
7834	101	2024	4	270
7835	101	2024	5	279
7836	101	2024	6	310
7837	101	2024	7	289
7838	101	2024	8	295
7839	101	2024	9	333
7840	101	2024	10	333
7841	101	2024	11	359
7842	101	2024	12	250
7843	101	2025	1	332
7844	101	2025	2	324
7845	101	2025	3	360
7846	101	2025	4	290
7847	101	2025	5	279
7848	101	2025	6	301
7849	101	2025	7	325
7850	101	2025	8	298
7851	101	2025	9	338
7852	101	2025	10	367
7853	101	2025	11	329
7854	101	2025	12	265
7855	101	2026	1	332
7856	101	2026	2	288
7857	101	2026	3	333
7858	101	2026	4	277
7859	101	2026	5	305
7860	101	2026	6	284
7861	102	2016	1	1962
7862	102	2016	2	1759
7863	102	2016	3	1824
7864	102	2016	4	1532
7865	102	2016	5	1709
7866	102	2016	6	1591
7867	102	2016	7	1839
7868	102	2016	8	1953
7869	102	2016	9	1886
7870	102	2016	10	2030
7871	102	2016	11	1892
7872	102	2016	12	1574
7873	102	2017	1	1956
7874	102	2017	2	1867
7875	102	2017	3	1873
7876	102	2017	4	1706
7877	102	2017	5	1621
7878	102	2017	6	1863
7879	102	2017	7	1776
7880	102	2017	8	1819
7881	102	2017	9	1983
7882	102	2017	10	2020
7883	102	2017	11	1967
7884	102	2017	12	1441
7885	102	2018	1	1734
7886	102	2018	2	1821
7887	102	2018	3	1874
7888	102	2018	4	1598
7889	102	2018	5	1808
7890	102	2018	6	1641
7891	102	2018	7	1887
7892	102	2018	8	1784
7893	102	2018	9	1913
7894	102	2018	10	2104
7895	102	2018	11	2010
7896	102	2018	12	1588
7897	102	2019	1	1856
7898	102	2019	2	1752
7899	102	2019	3	1817
7900	102	2019	4	1610
7901	102	2019	5	1732
7902	102	2019	6	1694
7903	102	2019	7	1860
7904	102	2019	8	1961
7905	102	2019	9	1762
7906	102	2019	10	2043
7907	102	2019	11	1942
7908	102	2019	12	1487
7909	102	2020	1	1297
7910	102	2020	2	1197
7911	102	2020	3	1381
7912	102	2020	4	1246
7913	102	2020	5	1207
7914	102	2020	6	1276
7915	102	2020	7	1319
7916	102	2020	8	1270
7917	102	2020	9	1296
7918	102	2020	10	1436
7919	102	2020	11	1369
7920	102	2020	12	1117
7921	102	2021	1	1638
7922	102	2021	2	1651
7923	102	2021	3	1711
7924	102	2021	4	1330
7925	102	2021	5	1374
7926	102	2021	6	1511
7927	102	2021	7	1576
7928	102	2021	8	1583
7929	102	2021	9	1742
7930	102	2021	10	1806
7931	102	2021	11	1629
7932	102	2021	12	1387
7933	102	2022	1	1375
7934	102	2022	2	1229
7935	102	2022	3	1463
7936	102	2022	4	1060
7937	102	2022	5	1100
7938	102	2022	6	1232
7939	102	2022	7	1326
7940	102	2022	8	1253
7941	102	2022	9	1374
7942	102	2022	10	1443
7943	102	2022	11	1413
7944	102	2022	12	1159
7945	103	2016	1	757
7946	103	2016	2	760
7947	103	2016	3	854
7948	103	2016	4	700
7949	103	2016	5	740
7950	103	2016	6	803
7951	103	2016	7	799
7952	103	2016	8	778
7953	103	2016	9	875
7954	103	2016	10	993
7955	103	2016	11	896
7956	103	2016	12	714
7957	103	2017	1	768
7958	103	2017	2	796
7959	103	2017	3	806
7960	103	2017	4	761
7961	103	2017	5	726
7962	103	2017	6	795
7963	103	2017	7	758
7964	103	2017	8	801
7965	103	2017	9	793
7966	103	2017	10	851
7967	103	2017	11	823
7968	103	2017	12	735
7969	103	2018	1	861
7970	103	2018	2	722
7971	103	2018	3	887
7972	103	2018	4	682
7973	103	2018	5	708
7974	103	2018	6	731
7975	103	2018	7	870
7976	103	2018	8	785
7977	103	2018	9	797
7978	103	2018	10	872
7979	103	2018	11	826
7980	103	2018	12	730
7981	103	2019	1	879
7982	103	2019	2	764
7983	103	2019	3	817
7984	103	2019	4	742
7985	103	2019	5	729
7986	103	2019	6	816
7987	103	2019	7	863
7988	103	2019	8	790
7989	103	2019	9	912
7990	103	2019	10	850
7991	103	2019	11	845
7992	103	2019	12	647
7993	103	2020	1	550
7994	103	2020	2	579
7995	103	2020	3	623
7996	103	2020	4	502
7997	103	2020	5	577
7998	103	2020	6	570
7999	103	2020	7	606
8000	103	2020	8	627
8001	103	2020	9	596
8002	103	2020	10	615
8003	103	2020	11	635
8004	103	2020	12	518
8005	103	2021	1	747
8006	103	2021	2	741
8007	103	2021	3	765
8008	103	2021	4	648
8009	103	2021	5	614
8010	103	2021	6	635
8011	103	2021	7	749
8012	103	2021	8	685
8013	103	2021	9	797
8014	103	2021	10	753
8015	103	2021	11	726
8016	103	2021	12	566
8017	103	2022	1	827
8018	103	2022	2	803
8019	103	2022	3	818
8020	103	2022	4	741
8021	103	2022	5	769
8022	103	2022	6	777
8023	103	2022	7	800
8024	103	2022	8	776
8025	103	2022	9	899
8026	103	2022	10	913
8027	103	2022	11	883
8028	103	2022	12	673
8029	104	2022	1	1686
8030	104	2022	2	1476
8031	104	2022	3	1723
8032	104	2022	4	1519
8033	104	2022	5	1549
8034	104	2022	6	1457
8035	104	2022	7	1657
8036	104	2022	8	1741
8037	104	2022	9	1672
8038	104	2022	10	1952
8039	104	2022	11	1703
8040	104	2022	12	1356
8041	104	2023	1	1740
8042	104	2023	2	1637
8043	104	2023	3	1856
8044	104	2023	4	1417
8045	104	2023	5	1391
8046	104	2023	6	1516
8047	104	2023	7	1494
8048	104	2023	8	1531
8049	104	2023	9	1721
8050	104	2023	10	1966
8051	104	2023	11	1826
8052	104	2023	12	1401
8053	104	2024	1	1913
8054	104	2024	2	1827
8055	104	2024	3	1863
8056	104	2024	4	1596
8057	104	2024	5	1824
8058	104	2024	6	1845
8059	104	2024	7	1965
8060	104	2024	8	1793
8061	104	2024	9	2072
8062	104	2024	10	2202
8063	104	2024	11	2100
8064	104	2024	12	1633
8065	104	2025	1	1847
8066	104	2025	2	1890
8067	104	2025	3	1909
8068	104	2025	4	1713
8069	104	2025	5	1791
8070	104	2025	6	1709
8071	104	2025	7	1841
8072	104	2025	8	1823
8073	104	2025	9	1956
8074	104	2025	10	2112
8075	104	2025	11	2177
8076	104	2025	12	1672
8077	104	2026	1	1811
8078	104	2026	2	1747
8079	104	2026	3	2012
8080	104	2026	4	1715
8081	104	2026	5	1810
8082	104	2026	6	1637
8083	105	2021	1	1626
8084	105	2021	2	1495
8085	105	2021	3	1659
8086	105	2021	4	1340
8087	105	2021	5	1544
8088	105	2021	6	1407
8089	105	2021	7	1505
8090	105	2021	8	1676
8091	105	2021	9	1593
8092	105	2021	10	1849
8093	105	2021	11	1707
8094	105	2021	12	1450
8095	105	2022	1	2398
8096	105	2022	2	2567
8097	105	2022	3	2595
8098	105	2022	4	2284
8099	105	2022	5	2316
8100	105	2022	6	2393
8101	105	2022	7	2500
8102	105	2022	8	2620
8103	105	2022	9	2423
8104	105	2022	10	2789
8105	105	2022	11	2619
8106	105	2022	12	2113
8107	105	2023	1	2471
8108	105	2023	2	2237
8109	105	2023	3	2518
8110	105	2023	4	2162
8111	105	2023	5	2383
8112	105	2023	6	2308
8113	105	2023	7	2522
8114	105	2023	8	2375
8115	105	2023	9	2595
8116	105	2023	10	2759
8117	105	2023	11	2672
8118	105	2023	12	2068
8119	105	2024	1	2783
8120	105	2024	2	2650
8121	105	2024	3	2973
8122	105	2024	4	2714
8123	105	2024	5	2761
8124	105	2024	6	2579
8125	105	2024	7	2827
8126	105	2024	8	3108
8127	105	2024	9	3104
8128	105	2024	10	3423
8129	105	2024	11	3127
8130	105	2024	12	2281
8131	105	2025	1	2639
8132	105	2025	2	2700
8133	105	2025	3	2925
8134	105	2025	4	2501
8135	105	2025	5	2507
8136	105	2025	6	2562
8137	105	2025	7	2681
8138	105	2025	8	2826
8139	105	2025	9	2805
8140	105	2025	10	3206
8141	105	2025	11	3014
8142	105	2025	12	2226
8143	105	2026	1	2968
8144	105	2026	2	2832
8145	105	2026	3	2779
8146	105	2026	4	2659
8147	105	2026	5	2476
8148	105	2026	6	2841
8149	106	2017	1	126
8150	106	2017	2	126
8151	106	2017	3	134
8152	106	2017	4	104
8153	106	2017	5	111
8154	106	2017	6	109
8155	106	2017	7	124
8156	106	2017	8	121
8157	106	2017	9	135
8158	106	2017	10	128
8159	106	2017	11	130
8160	106	2017	12	110
8161	106	2018	1	114
8162	106	2018	2	122
8163	106	2018	3	131
8164	106	2018	4	104
8165	106	2018	5	106
8166	106	2018	6	116
8167	106	2018	7	127
8168	106	2018	8	119
8169	106	2018	9	120
8170	106	2018	10	136
8171	106	2018	11	134
8172	106	2018	12	96
8173	106	2019	1	130
8174	106	2019	2	123
8175	106	2019	3	127
8176	106	2019	4	107
8177	106	2019	5	110
8178	106	2019	6	113
8179	106	2019	7	126
8180	106	2019	8	119
8181	106	2019	9	130
8182	106	2019	10	147
8183	106	2019	11	128
8184	106	2019	12	108
8185	106	2020	1	88
8186	106	2020	2	83
8187	106	2020	3	94
8188	106	2020	4	73
8189	106	2020	5	75
8190	106	2020	6	86
8191	106	2020	7	93
8192	106	2020	8	85
8193	106	2020	9	95
8194	106	2020	10	102
8195	106	2020	11	95
8196	106	2020	12	69
8197	106	2021	1	115
8198	106	2021	2	111
8199	106	2021	3	108
8200	106	2021	4	100
8201	106	2021	5	101
8202	106	2021	6	108
8203	106	2021	7	100
8204	106	2021	8	107
8205	106	2021	9	119
8206	106	2021	10	128
8207	106	2021	11	107
8208	106	2021	12	97
8209	106	2022	1	163
8210	106	2022	2	149
8211	106	2022	3	185
8212	106	2022	4	134
8213	106	2022	5	162
8214	106	2022	6	155
8215	106	2022	7	172
8216	106	2022	8	160
8217	106	2022	9	177
8218	106	2022	10	188
8219	106	2022	11	190
8220	106	2022	12	146
8221	106	2023	1	172
8222	106	2023	2	150
8223	106	2023	3	171
8224	106	2023	4	155
8225	106	2023	5	143
8226	106	2023	6	164
8227	106	2023	7	153
8228	106	2023	8	171
8229	106	2023	9	182
8230	106	2023	10	192
8231	106	2023	11	180
8232	106	2023	12	145
8233	106	2024	1	199
8234	106	2024	2	188
8235	106	2024	3	216
8236	106	2024	4	178
8237	106	2024	5	167
8238	106	2024	6	193
8239	106	2024	7	191
8240	106	2024	8	191
8241	106	2024	9	185
8242	106	2024	10	214
8243	106	2024	11	197
8244	106	2024	12	162
8245	106	2025	1	192
8246	106	2025	2	177
8247	106	2025	3	186
8248	106	2025	4	174
8249	106	2025	5	174
8250	106	2025	6	168
8251	106	2025	7	199
8252	106	2025	8	183
8253	106	2025	9	182
8254	106	2025	10	205
8255	106	2025	11	210
8256	106	2025	12	170
8257	106	2026	1	205
8258	106	2026	2	179
8259	106	2026	3	194
8260	106	2026	4	180
8261	106	2026	5	175
8262	106	2026	6	178
8263	107	2016	1	1552
8264	107	2016	2	1561
8265	107	2016	3	1666
8266	107	2016	4	1407
8267	107	2016	5	1300
8268	107	2016	6	1464
8269	107	2016	7	1457
8270	107	2016	8	1447
8271	107	2016	9	1629
8272	107	2016	10	1775
8273	107	2016	11	1614
8274	107	2016	12	1210
8275	107	2017	1	1558
8276	107	2017	2	1528
8277	107	2017	3	1670
8278	107	2017	4	1292
8279	107	2017	5	1386
8280	107	2017	6	1389
8281	107	2017	7	1397
8282	107	2017	8	1478
8283	107	2017	9	1560
8284	107	2017	10	1706
8285	107	2017	11	1592
8286	107	2017	12	1313
8287	107	2018	1	1546
8288	107	2018	2	1550
8289	107	2018	3	1636
8290	107	2018	4	1252
8291	107	2018	5	1319
8292	107	2018	6	1327
8293	107	2018	7	1569
8294	107	2018	8	1624
8295	107	2018	9	1660
8296	107	2018	10	1671
8297	107	2018	11	1676
8298	107	2018	12	1383
8299	107	2019	1	1461
8300	107	2019	2	1421
8301	107	2019	3	1679
8302	107	2019	4	1400
8303	107	2019	5	1377
8304	107	2019	6	1376
8305	107	2019	7	1489
8306	107	2019	8	1559
8307	107	2019	9	1572
8308	107	2019	10	1698
8309	107	2019	11	1701
8310	107	2019	12	1319
8311	107	2020	1	1099
8312	107	2020	2	1007
8313	107	2020	3	1076
8314	107	2020	4	1021
8315	107	2020	5	1034
8316	107	2020	6	982
8317	107	2020	7	1026
8318	107	2020	8	1087
8319	107	2020	9	1086
8320	107	2020	10	1221
8321	107	2020	11	1199
8322	107	2020	12	990
8323	107	2021	1	1380
8324	107	2021	2	1331
8325	107	2021	3	1327
8326	107	2021	4	1125
8327	107	2021	5	1231
8328	107	2021	6	1203
8329	107	2021	7	1347
8330	107	2021	8	1447
8331	107	2021	9	1293
8332	107	2021	10	1414
8333	107	2021	11	1418
8334	107	2021	12	1106
8335	108	2018	1	1317
8336	108	2018	2	1162
8337	108	2018	3	1230
8338	108	2018	4	1010
8339	108	2018	5	1215
8340	108	2018	6	1188
8341	108	2018	7	1241
8342	108	2018	8	1281
8343	108	2018	9	1172
8344	108	2018	10	1460
8345	108	2018	11	1314
8346	108	2018	12	955
8347	108	2019	1	1257
8348	108	2019	2	1157
8349	108	2019	3	1254
8350	108	2019	4	1138
8351	108	2019	5	1212
8352	108	2019	6	1087
8353	108	2019	7	1265
8354	108	2019	8	1171
8355	108	2019	9	1233
8356	108	2019	10	1475
8357	108	2019	11	1330
8358	108	2019	12	1078
8359	108	2020	1	861
8360	108	2020	2	902
8361	108	2020	3	933
8362	108	2020	4	785
8363	108	2020	5	819
8364	108	2020	6	838
8365	108	2020	7	803
8366	108	2020	8	923
8367	108	2020	9	973
8368	108	2020	10	1000
8369	108	2020	11	980
8370	108	2020	12	737
8371	108	2021	1	1022
8372	108	2021	2	1015
8373	108	2021	3	1171
8374	108	2021	4	915
8375	108	2021	5	1069
8376	108	2021	6	1047
8377	108	2021	7	1037
8378	108	2021	8	1104
8379	108	2021	9	1181
8380	108	2021	10	1187
8381	108	2021	11	1226
8382	108	2021	12	961
8383	109	2016	1	1492
8384	109	2016	2	1468
8385	109	2016	3	1428
8386	109	2016	4	1259
8387	109	2016	5	1319
8388	109	2016	6	1433
8389	109	2016	7	1419
8390	109	2016	8	1385
8391	109	2016	9	1496
8392	109	2016	10	1664
8393	109	2016	11	1565
8394	109	2016	12	1175
8395	109	2017	1	1467
8396	109	2017	2	1418
8397	109	2017	3	1563
8398	109	2017	4	1180
8399	109	2017	5	1258
8400	109	2017	6	1281
8401	109	2017	7	1354
8402	109	2017	8	1493
8403	109	2017	9	1502
8404	109	2017	10	1589
8405	109	2017	11	1647
8406	109	2017	12	1233
8407	109	2018	1	1468
8408	109	2018	2	1399
8409	109	2018	3	1505
8410	109	2018	4	1337
8411	109	2018	5	1367
8412	109	2018	6	1294
8413	109	2018	7	1390
8414	109	2018	8	1539
8415	109	2018	9	1549
8416	109	2018	10	1594
8417	109	2018	11	1515
8418	109	2018	12	1269
8419	109	2019	1	1360
8420	109	2019	2	1354
8421	109	2019	3	1605
8422	109	2019	4	1178
8423	109	2019	5	1292
8424	109	2019	6	1445
8425	109	2019	7	1350
8426	109	2019	8	1525
8427	109	2019	9	1445
8428	109	2019	10	1705
8429	109	2019	11	1643
8430	109	2019	12	1140
8431	109	2020	1	1011
8432	109	2020	2	1033
8433	109	2020	3	1157
8434	109	2020	4	837
8435	109	2020	5	1017
8436	109	2020	6	894
8437	109	2020	7	1006
8438	109	2020	8	1024
8439	109	2020	9	1100
8440	109	2020	10	1222
8441	109	2020	11	1103
8442	109	2020	12	811
8443	109	2021	1	1169
8444	109	2021	2	1248
8445	109	2021	3	1294
8446	109	2021	4	1148
8447	109	2021	5	1124
8448	109	2021	6	1229
8449	109	2021	7	1156
8450	109	2021	8	1189
8451	109	2021	9	1409
8452	109	2021	10	1354
8453	109	2021	11	1368
8454	109	2021	12	1045
8455	110	2016	1	3684
8456	110	2016	2	3780
8457	110	2016	3	4050
8458	110	2016	4	3599
8459	110	2016	5	3631
8460	110	2016	6	3406
8461	110	2016	7	3951
8462	110	2016	8	4106
8463	110	2016	9	4167
8464	110	2016	10	4334
8465	110	2016	11	4281
8466	110	2016	12	3493
8467	110	2017	1	3707
8468	110	2017	2	3586
8469	110	2017	3	4408
8470	110	2017	4	3514
8471	110	2017	5	3485
8472	110	2017	6	3697
8473	110	2017	7	3870
8474	110	2017	8	4216
8475	110	2017	9	3926
8476	110	2017	10	4649
8477	110	2017	11	4275
8478	110	2017	12	3369
8479	110	2018	1	3701
8480	110	2018	2	3748
8481	110	2018	3	3956
8482	110	2018	4	3408
8483	110	2018	5	3706
8484	110	2018	6	3753
8485	110	2018	7	3750
8486	110	2018	8	3666
8487	110	2018	9	4250
8488	110	2018	10	4397
8489	110	2018	11	4077
8490	110	2018	12	3111
8491	110	2019	1	3775
8492	110	2019	2	3947
8493	110	2019	3	3908
8494	110	2019	4	3681
8495	110	2019	5	3645
8496	110	2019	6	3804
8497	110	2019	7	3686
8498	110	2019	8	3996
8499	110	2019	9	4178
8500	110	2019	10	4366
8501	110	2019	11	4153
8502	110	2019	12	3217
8503	110	2020	1	2757
8504	110	2020	2	2543
8505	110	2020	3	3185
8506	110	2020	4	2616
8507	110	2020	5	2645
8508	110	2020	6	2507
8509	110	2020	7	2786
8510	110	2020	8	2931
8511	110	2020	9	2929
8512	110	2020	10	3154
8513	110	2020	11	2865
8514	110	2020	12	2402
8515	110	2021	1	3351
8516	110	2021	2	3362
8517	110	2021	3	3832
8518	110	2021	4	2773
8519	110	2021	5	3327
8520	110	2021	6	3246
8521	110	2021	7	3247
8522	110	2021	8	3601
8523	110	2021	9	3449
8524	110	2021	10	3617
8525	110	2021	11	3927
8526	110	2021	12	3003
8527	111	2016	1	584
8528	111	2016	2	600
8529	111	2016	3	662
8530	111	2016	4	536
8531	111	2016	5	552
8532	111	2016	6	545
8533	111	2016	7	623
8534	111	2016	8	631
8535	111	2016	9	651
8536	111	2016	10	674
8537	111	2016	11	642
8538	111	2016	12	514
8539	111	2017	1	642
8540	111	2017	2	632
8541	111	2017	3	666
8542	111	2017	4	569
8543	111	2017	5	570
8544	111	2017	6	552
8545	111	2017	7	640
8546	111	2017	8	657
8547	111	2017	9	660
8548	111	2017	10	719
8549	111	2017	11	678
8550	111	2017	12	556
8551	111	2018	1	643
8552	111	2018	2	598
8553	111	2018	3	612
8554	111	2018	4	551
8555	111	2018	5	607
8556	111	2018	6	595
8557	111	2018	7	613
8558	111	2018	8	598
8559	111	2018	9	588
8560	111	2018	10	712
8561	111	2018	11	659
8562	111	2018	12	487
8563	111	2019	1	636
8564	111	2019	2	578
8565	111	2019	3	648
8566	111	2019	4	512
8567	111	2019	5	578
8568	111	2019	6	581
8569	111	2019	7	584
8570	111	2019	8	648
8571	111	2019	9	653
8572	111	2019	10	637
8573	111	2019	11	658
8574	111	2019	12	486
8575	111	2020	1	438
8576	111	2020	2	420
8577	111	2020	3	469
8578	111	2020	4	363
8579	111	2020	5	378
8580	111	2020	6	399
8581	111	2020	7	422
8582	111	2020	8	456
8583	111	2020	9	450
8584	111	2020	10	520
8585	111	2020	11	471
8586	111	2020	12	382
8587	111	2021	1	517
8588	111	2021	2	504
8589	111	2021	3	580
8590	111	2021	4	503
8591	111	2021	5	504
8592	111	2021	6	526
8593	111	2021	7	538
8594	111	2021	8	580
8595	111	2021	9	545
8596	111	2021	10	632
8597	111	2021	11	613
8598	111	2021	12	477
8599	112	2016	1	1853
8600	112	2016	2	1880
8601	112	2016	3	1847
8602	112	2016	4	1496
8603	112	2016	5	1660
8604	112	2016	6	1762
8605	112	2016	7	1822
8606	112	2016	8	1710
8607	112	2016	9	1948
8608	112	2016	10	2222
8609	112	2016	11	2027
8610	112	2016	12	1533
8611	112	2017	1	1853
8612	112	2017	2	1760
8613	112	2017	3	2059
8614	112	2017	4	1531
8615	112	2017	5	1615
8616	112	2017	6	1680
8617	112	2017	7	1684
8618	112	2017	8	1987
8619	112	2017	9	1952
8620	112	2017	10	1926
8621	112	2017	11	2057
8622	112	2017	12	1562
8623	112	2018	1	1825
8624	112	2018	2	1807
8625	112	2018	3	2056
8626	112	2018	4	1702
8627	112	2018	5	1723
8628	112	2018	6	1832
8629	112	2018	7	1755
8630	112	2018	8	1735
8631	112	2018	9	1774
8632	112	2018	10	2000
8633	112	2018	11	1947
8634	112	2018	12	1479
8635	112	2019	1	1893
8636	112	2019	2	1661
8637	112	2019	3	1810
8638	112	2019	4	1508
8639	112	2019	5	1735
8640	112	2019	6	1727
8641	112	2019	7	1749
8642	112	2019	8	1728
8643	112	2019	9	1948
8644	112	2019	10	2066
8645	112	2019	11	1836
8646	112	2019	12	1573
8647	112	2020	1	1315
8648	112	2020	2	1238
8649	112	2020	3	1496
8650	112	2020	4	1173
8651	112	2020	5	1185
8652	112	2020	6	1306
8653	112	2020	7	1258
8654	112	2020	8	1305
8655	112	2020	9	1418
8656	112	2020	10	1593
8657	112	2020	11	1428
8658	112	2020	12	1149
8659	112	2021	1	1522
8660	112	2021	2	1605
8661	112	2021	3	1664
8662	112	2021	4	1390
8663	112	2021	5	1524
8664	112	2021	6	1572
8665	112	2021	7	1512
8666	112	2021	8	1618
8667	112	2021	9	1740
8668	112	2021	10	1899
8669	112	2021	11	1671
8670	112	2021	12	1316
8671	112	2022	1	1206
8672	112	2022	2	1165
8673	112	2022	3	1398
8674	112	2022	4	1224
8675	112	2022	5	1135
8676	112	2022	6	1236
8677	112	2022	7	1209
8678	112	2022	8	1395
8679	112	2022	9	1327
8680	112	2022	10	1552
8681	112	2022	11	1445
8682	112	2022	12	1072
8683	113	2016	1	766
8684	113	2016	2	747
8685	113	2016	3	900
8686	113	2016	4	735
8687	113	2016	5	697
8688	113	2016	6	759
8689	113	2016	7	847
8690	113	2016	8	833
8691	113	2016	9	793
8692	113	2016	10	877
8693	113	2016	11	914
8694	113	2016	12	671
8695	113	2017	1	871
8696	113	2017	2	779
8697	113	2017	3	835
8698	113	2017	4	758
8699	113	2017	5	802
8700	113	2017	6	717
8701	113	2017	7	772
8702	113	2017	8	799
8703	113	2017	9	899
8704	113	2017	10	911
8705	113	2017	11	927
8706	113	2017	12	692
8707	113	2018	1	787
8708	113	2018	2	830
8709	113	2018	3	833
8710	113	2018	4	766
8711	113	2018	5	743
8712	113	2018	6	783
8713	113	2018	7	789
8714	113	2018	8	784
8715	113	2018	9	821
8716	113	2018	10	853
8717	113	2018	11	940
8718	113	2018	12	691
8719	113	2019	1	814
8720	113	2019	2	788
8721	113	2019	3	806
8722	113	2019	4	682
8723	113	2019	5	711
8724	113	2019	6	781
8725	113	2019	7	856
8726	113	2019	8	888
8727	113	2019	9	866
8728	113	2019	10	955
8729	113	2019	11	843
8730	113	2019	12	654
8731	113	2020	1	555
8732	113	2020	2	563
8733	113	2020	3	574
8734	113	2020	4	501
8735	113	2020	5	502
8736	113	2020	6	522
8737	113	2020	7	609
8738	113	2020	8	562
8739	113	2020	9	633
8740	113	2020	10	623
8741	113	2020	11	635
8742	113	2020	12	486
8743	113	2021	1	715
8744	113	2021	2	660
8745	113	2021	3	712
8746	113	2021	4	612
8747	113	2021	5	657
8748	113	2021	6	685
8749	113	2021	7	744
8750	113	2021	8	719
8751	113	2021	9	722
8752	113	2021	10	835
8753	113	2021	11	816
8754	113	2021	12	574
8755	113	2022	1	543
8756	113	2022	2	517
8757	113	2022	3	640
8758	113	2022	4	501
8759	113	2022	5	485
8760	113	2022	6	526
8761	113	2022	7	546
8762	113	2022	8	585
8763	113	2022	9	579
8764	113	2022	10	692
8765	113	2022	11	569
8766	113	2022	12	447
8767	114	2016	1	611
8768	114	2016	2	542
8769	114	2016	3	620
8770	114	2016	4	566
8771	114	2016	5	532
8772	114	2016	6	536
8773	114	2016	7	614
8774	114	2016	8	575
8775	114	2016	9	599
8776	114	2016	10	735
8777	114	2016	11	696
8778	114	2016	12	545
8779	114	2017	1	657
8780	114	2017	2	596
8781	114	2017	3	670
8782	114	2017	4	522
8783	114	2017	5	593
8784	114	2017	6	542
8785	114	2017	7	569
8786	114	2017	8	580
8787	114	2017	9	607
8788	114	2017	10	670
8789	114	2017	11	683
8790	114	2017	12	532
8791	114	2018	1	564
8792	114	2018	2	574
8793	114	2018	3	607
8794	114	2018	4	519
8795	114	2018	5	608
8796	114	2018	6	541
8797	114	2018	7	559
8798	114	2018	8	652
8799	114	2018	9	654
8800	114	2018	10	712
8801	114	2018	11	674
8802	114	2018	12	524
8803	114	2019	1	633
8804	114	2019	2	548
8805	114	2019	3	698
8806	114	2019	4	532
8807	114	2019	5	552
8808	114	2019	6	606
8809	114	2019	7	585
8810	114	2019	8	586
8811	114	2019	9	623
8812	114	2019	10	688
8813	114	2019	11	701
8814	114	2019	12	490
8815	114	2020	1	416
8816	114	2020	2	435
8817	114	2020	3	474
8818	114	2020	4	417
8819	114	2020	5	398
8820	114	2020	6	402
8821	114	2020	7	445
8822	114	2020	8	432
8823	114	2020	9	448
8824	114	2020	10	516
8825	114	2020	11	500
8826	114	2020	12	373
8827	114	2021	1	561
8828	114	2021	2	509
8829	114	2021	3	549
8830	114	2021	4	464
8831	114	2021	5	528
8832	114	2021	6	531
8833	114	2021	7	549
8834	114	2021	8	562
8835	114	2021	9	538
8836	114	2021	10	559
8837	114	2021	11	542
8838	114	2021	12	446
8839	114	2022	1	642
8840	114	2022	2	604
8841	114	2022	3	671
8842	114	2022	4	566
8843	114	2022	5	525
8844	114	2022	6	588
8845	114	2022	7	565
8846	114	2022	8	660
8847	114	2022	9	624
8848	114	2022	10	707
8849	114	2022	11	636
8850	114	2022	12	539
8851	115	2016	1	1183
8852	115	2016	2	1259
8853	115	2016	3	1288
8854	115	2016	4	1126
8855	115	2016	5	1083
8856	115	2016	6	1154
8857	115	2016	7	1190
8858	115	2016	8	1241
8859	115	2016	9	1319
8860	115	2016	10	1325
8861	115	2016	11	1421
8862	115	2016	12	972
8863	115	2017	1	1144
8864	115	2017	2	1232
8865	115	2017	3	1237
8866	115	2017	4	1119
8867	115	2017	5	1113
8868	115	2017	6	1092
8869	115	2017	7	1236
8870	115	2017	8	1313
8871	115	2017	9	1223
8872	115	2017	10	1459
8873	115	2017	11	1224
8874	115	2017	12	1080
8875	116	2016	1	314
8876	116	2016	2	280
8877	116	2016	3	342
8878	116	2016	4	253
8879	116	2016	5	283
8880	116	2016	6	291
8881	116	2016	7	297
8882	116	2016	8	301
8883	116	2016	9	312
8884	116	2016	10	337
8885	116	2016	11	338
8886	116	2016	12	276
8887	116	2017	1	308
8888	116	2017	2	315
8889	116	2017	3	320
8890	116	2017	4	269
8891	116	2017	5	297
8892	116	2017	6	270
8893	116	2017	7	284
8894	116	2017	8	304
8895	116	2017	9	324
8896	116	2017	10	350
8897	116	2017	11	304
8898	116	2017	12	269
8899	117	2016	1	258
8900	117	2016	2	245
8901	117	2016	3	249
8902	117	2016	4	217
8903	117	2016	5	234
8904	117	2016	6	236
8905	117	2016	7	265
8906	117	2016	8	252
8907	117	2016	9	270
8908	117	2016	10	309
8909	117	2016	11	265
8910	117	2016	12	230
8911	117	2017	1	253
8912	117	2017	2	257
8913	117	2017	3	261
8914	117	2017	4	220
8915	117	2017	5	226
8916	117	2017	6	238
8917	117	2017	7	255
8918	117	2017	8	259
8919	117	2017	9	257
8920	117	2017	10	299
8921	117	2017	11	258
8922	117	2017	12	208
8923	118	2016	1	106
8924	118	2016	2	97
8925	118	2016	3	99
8926	118	2016	4	89
8927	118	2016	5	89
8928	118	2016	6	101
8929	118	2016	7	99
8930	118	2016	8	103
8931	118	2016	9	99
8932	118	2016	10	119
8933	118	2016	11	102
8934	118	2016	12	90
8935	118	2017	1	96
8936	118	2017	2	96
8937	118	2017	3	113
8938	118	2017	4	83
8939	118	2017	5	100
8940	118	2017	6	96
8941	118	2017	7	102
8942	118	2017	8	106
8943	118	2017	9	101
8944	118	2017	10	112
8945	118	2017	11	110
8946	118	2017	12	83
8947	119	2016	1	21
8948	119	2016	2	20
8949	119	2016	3	21
8950	119	2016	4	16
8951	119	2016	5	17
8952	119	2016	6	18
8953	119	2016	7	19
8954	119	2016	8	19
8955	119	2016	9	21
8956	119	2016	10	21
8957	119	2016	11	22
8958	119	2016	12	17
8959	119	2017	1	21
8960	119	2017	2	19
8961	119	2017	3	22
8962	119	2017	4	17
8963	119	2017	5	19
8964	119	2017	6	20
8965	119	2017	7	20
8966	119	2017	8	20
8967	119	2017	9	20
8968	119	2017	10	23
8969	119	2017	11	22
8970	119	2017	12	18
8971	120	2016	1	393
8972	120	2016	2	402
8973	120	2016	3	440
8974	120	2016	4	339
8975	120	2016	5	369
8976	120	2016	6	402
8977	120	2016	7	402
8978	120	2016	8	395
8979	120	2016	9	448
8980	120	2016	10	435
8981	120	2016	11	439
8982	120	2016	12	371
8983	120	2017	1	389
8984	120	2017	2	410
8985	120	2017	3	445
8986	120	2017	4	360
8987	120	2017	5	348
8988	120	2017	6	384
8989	120	2017	7	377
8990	120	2017	8	383
8991	120	2017	9	442
8992	120	2017	10	468
8993	120	2017	11	470
8994	120	2017	12	340
8995	120	2018	1	433
8996	120	2018	2	370
8997	120	2018	3	459
8998	120	2018	4	344
8999	120	2018	5	355
9000	120	2018	6	371
9001	120	2018	7	377
9002	120	2018	8	395
9003	120	2018	9	405
9004	120	2018	10	491
9005	120	2018	11	438
9006	120	2018	12	329
9007	120	2019	1	403
9008	120	2019	2	362
9009	120	2019	3	461
9010	120	2019	4	356
9011	120	2019	5	362
9012	120	2019	6	369
9013	120	2019	7	388
9014	120	2019	8	401
9015	120	2019	9	437
9016	120	2019	10	456
9017	120	2019	11	408
9018	120	2019	12	321
9019	121	2016	1	147
9020	121	2016	2	141
9021	121	2016	3	157
9022	121	2016	4	133
9023	121	2016	5	135
9024	121	2016	6	133
9025	121	2016	7	159
9026	121	2016	8	150
9027	121	2016	9	156
9028	121	2016	10	159
9029	121	2016	11	169
9030	121	2016	12	126
9031	121	2017	1	163
9032	121	2017	2	139
9033	121	2017	3	172
9034	121	2017	4	126
9035	121	2017	5	140
9036	121	2017	6	141
9037	121	2017	7	159
9038	121	2017	8	165
9039	121	2017	9	161
9040	121	2017	10	170
9041	121	2017	11	169
9042	121	2017	12	137
9043	121	2018	1	155
9044	121	2018	2	148
9045	121	2018	3	156
9046	121	2018	4	124
9047	121	2018	5	147
9048	121	2018	6	145
9049	121	2018	7	155
9050	121	2018	8	163
9051	121	2018	9	149
9052	121	2018	10	174
9053	121	2018	11	168
9054	121	2018	12	120
9055	121	2019	1	145
9056	121	2019	2	152
9057	121	2019	3	162
9058	121	2019	4	130
9059	121	2019	5	144
9060	121	2019	6	151
9061	121	2019	7	150
9062	121	2019	8	146
9063	121	2019	9	148
9064	121	2019	10	185
9065	121	2019	11	176
9066	121	2019	12	130
9067	122	2016	1	107
9068	122	2016	2	90
9069	122	2016	3	100
9070	122	2016	4	92
9071	122	2016	5	99
9072	122	2016	6	98
9073	122	2016	7	98
9074	122	2016	8	105
9075	122	2016	9	98
9076	122	2016	10	106
9077	122	2016	11	117
9078	122	2016	12	87
9079	122	2017	1	104
9080	122	2017	2	98
9081	122	2017	3	108
9082	122	2017	4	83
9083	122	2017	5	88
9084	122	2017	6	97
9085	122	2017	7	103
9086	122	2017	8	96
9087	122	2017	9	100
9088	122	2017	10	119
9089	122	2017	11	116
9090	122	2017	12	92
9091	122	2018	1	109
9092	122	2018	2	103
9093	122	2018	3	113
9094	122	2018	4	91
9095	122	2018	5	87
9096	122	2018	6	94
9097	122	2018	7	94
9098	122	2018	8	95
9099	122	2018	9	106
9100	122	2018	10	117
9101	122	2018	11	103
9102	122	2018	12	80
9103	122	2019	1	108
9104	122	2019	2	101
9105	122	2019	3	113
9106	122	2019	4	95
9107	122	2019	5	87
9108	122	2019	6	103
9109	122	2019	7	93
9110	122	2019	8	99
9111	122	2019	9	113
9112	122	2019	10	119
9113	122	2019	11	116
9114	122	2019	12	82
9115	123	2016	1	219
9116	123	2016	2	189
9117	123	2016	3	217
9118	123	2016	4	166
9119	123	2016	5	179
9120	123	2016	6	186
9121	123	2016	7	191
9122	123	2016	8	191
9123	123	2016	9	209
9124	123	2016	10	215
9125	123	2016	11	213
9126	123	2016	12	182
9127	123	2017	1	200
9128	123	2017	2	197
9129	123	2017	3	211
9130	123	2017	4	186
9131	123	2017	5	175
9132	123	2017	6	186
9133	123	2017	7	215
9134	123	2017	8	200
9135	123	2017	9	212
9136	123	2017	10	238
9137	123	2017	11	219
9138	123	2017	12	167
9139	123	2018	1	195
9140	123	2018	2	202
9141	123	2018	3	208
9142	123	2018	4	176
9143	123	2018	5	179
9144	123	2018	6	197
9145	123	2018	7	214
9146	123	2018	8	192
9147	123	2018	9	196
9148	123	2018	10	223
9149	123	2018	11	211
9150	123	2018	12	176
9151	123	2019	1	211
9152	123	2019	2	186
9153	123	2019	3	221
9154	123	2019	4	172
9155	123	2019	5	185
9156	123	2019	6	191
9157	123	2019	7	193
9158	123	2019	8	197
9159	123	2019	9	205
9160	123	2019	10	235
9161	123	2019	11	217
9162	123	2019	12	169
9163	124	2016	1	22
9164	124	2016	2	18
9165	124	2016	3	22
9166	124	2016	4	18
9167	124	2016	5	19
9168	124	2016	6	19
9169	124	2016	7	20
9170	124	2016	8	20
9171	124	2016	9	19
9172	124	2016	10	23
9173	124	2016	11	22
9174	124	2016	12	15
9175	124	2017	1	20
9176	124	2017	2	18
9177	124	2017	3	21
9178	124	2017	4	17
9179	124	2017	5	17
9180	124	2017	6	17
9181	124	2017	7	20
9182	124	2017	8	19
9183	124	2017	9	22
9184	124	2017	10	23
9185	124	2017	11	21
9186	124	2017	12	18
9187	124	2018	1	20
9188	124	2018	2	20
9189	124	2018	3	20
9190	124	2018	4	18
9191	124	2018	5	20
9192	124	2018	6	20
9193	124	2018	7	19
9194	124	2018	8	19
9195	124	2018	9	20
9196	124	2018	10	22
9197	124	2018	11	23
9198	124	2018	12	18
9199	124	2019	1	20
9200	124	2019	2	19
9201	124	2019	3	21
9202	124	2019	4	17
9203	124	2019	5	17
9204	124	2019	6	18
9205	124	2019	7	21
9206	124	2019	8	19
9207	124	2019	9	21
9208	124	2019	10	24
9209	124	2019	11	20
9210	124	2019	12	17
9211	125	2016	1	10
9212	125	2016	2	9
9213	125	2016	3	11
9214	125	2016	4	8
9215	125	2016	5	9
9216	125	2016	6	10
9217	125	2016	7	10
9218	125	2016	8	9
9219	125	2016	9	10
9220	125	2016	10	11
9221	125	2016	11	11
9222	125	2016	12	8
9223	125	2017	1	10
9224	125	2017	2	9
9225	125	2017	3	11
9226	125	2017	4	9
9227	125	2017	5	8
9228	125	2017	6	8
9229	125	2017	7	10
9230	125	2017	8	10
9231	125	2017	9	10
9232	125	2017	10	11
9233	125	2017	11	11
9234	125	2017	12	8
9235	125	2018	1	9
9236	125	2018	2	9
9237	125	2018	3	11
9238	125	2018	4	9
9239	125	2018	5	8
9240	125	2018	6	9
9241	125	2018	7	10
9242	125	2018	8	9
9243	125	2018	9	10
9244	125	2018	10	11
9245	125	2018	11	11
9246	125	2018	12	9
\.


--
-- Name: brands_brand_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.brands_brand_id_seq', 1, false);


--
-- Name: categories_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_category_id_seq', 1, false);


--
-- Name: ev_models_ev_model_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ev_models_ev_model_id_seq', 28, true);


--
-- Name: ev_monthly_sales_sale_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ev_monthly_sales_sale_id_seq', 1024, true);


--
-- Name: models_model_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.models_model_id_seq', 1, false);


--
-- Name: sales_sale_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sales_sale_id_seq', 1, false);


--
-- Name: brands brands_brand_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_brand_name_key UNIQUE (brand_name);


--
-- Name: brands brands_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (brand_id);


--
-- Name: categories categories_category_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_category_name_key UNIQUE (category_name);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (category_id);


--
-- Name: ev_models ev_models_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ev_models
    ADD CONSTRAINT ev_models_pkey PRIMARY KEY (ev_model_id);


--
-- Name: ev_monthly_sales ev_monthly_sales_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ev_monthly_sales
    ADD CONSTRAINT ev_monthly_sales_pkey PRIMARY KEY (sale_id);


--
-- Name: models models_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.models
    ADD CONSTRAINT models_pkey PRIMARY KEY (model_id);


--
-- Name: sales sales_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_pkey PRIMARY KEY (sale_id);


--
-- Name: idx_ev_models_brand; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_ev_models_brand ON public.ev_models USING btree (brand_name);


--
-- Name: idx_ev_models_model; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_ev_models_model ON public.ev_models USING btree (model_name);


--
-- Name: idx_ev_sales_brand; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_ev_sales_brand ON public.ev_monthly_sales USING btree (brand_name);


--
-- Name: idx_ev_sales_model; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_ev_sales_model ON public.ev_monthly_sales USING btree (model_name);


--
-- Name: idx_ev_sales_month; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_ev_sales_month ON public.ev_monthly_sales USING btree (sales_month);


--
-- Name: idx_ev_sales_year; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_ev_sales_year ON public.ev_monthly_sales USING btree (sales_year);


--
-- Name: models models_brand_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.models
    ADD CONSTRAINT models_brand_id_fkey FOREIGN KEY (brand_id) REFERENCES public.brands(brand_id);


--
-- Name: models models_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.models
    ADD CONSTRAINT models_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(category_id);


--
-- Name: sales sales_model_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_model_id_fkey FOREIGN KEY (model_id) REFERENCES public.models(model_id);


--
-- PostgreSQL database dump complete
--

\unrestrict pamJlDf0cBowFBUhWVw8r8fAHrHARwQVfAgNffyePW52mcxGENxAZsU69ahj3sm

