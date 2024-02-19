from sqlalchemy import create_engine, Column, String, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


engine = create_engine('mysql://hbnb_dev:hbnb_dev_pwd@localhost/hbnb_dev_db')
session = sessionmaker(bind=engine)()

Base = declarative_base()
class Amenity(Base):
    __tablename__ = 'amenity'
    id = Column(String(250), primary_key=True)
    updated_at = Column(Date)
    created_at = Column(Date)
    name = Column(String(128), nullable=False)

class Place(Base):
    # place table schema
    __tablename__ = "place"
    id = Column(String(250), primary_key=True)
    update_at = Column(Date)
    created_at = Column(Date)
    # user_id = Column(String(250), foreign_key=True)
    name = Column(String(128), nullable=False)
    city_id = Columnt(String(250), foreign_key=True)
    description = Column(String(320), nullable=True)
    number_rooms = (Integer, default=0, nullable=False)
    number_bathrooms = (Integer, default=0, nullable=False)
    max_guest = Column(Integer, default=0, nullable=False)
    price_by_night = Column(Integer, default=0, nullable=False)
    latitude = Column(Float, nullable=True)
    longitude = (Float, nullable=True)



Base.metadata.create_all(engine)
