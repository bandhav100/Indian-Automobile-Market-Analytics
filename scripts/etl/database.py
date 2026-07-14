import psycopg2

def get_connection():
    conn = psycopg2.connect(
        host="localhost",
        database="automobile_market",
        user="postgres",
        password="bandhav1",
        port="5432"
    )
    return conn
