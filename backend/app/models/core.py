from __future__ import annotations

from datetime import datetime
from enum import Enum
from uuid import UUID, uuid4

from sqlalchemy import ForeignKey, JSON, Integer, Text, String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship


class DataType(Enum):
    TEXT = "text"
    NUMBER = "number"
    BOOLEAN = "boolean"
    DATE = "date"
    ARRAY = "array"

class FieldType(Enum):
    TEXT = "text"
    NUMBER = "number"
    CHECK = "check"
    DATE = "date"
    SELECT = "select"
    TAGS = "tags"


class Base(DeclarativeBase):
    pass


class Flow(Base):
    __tablename__ = "flows"

    id: Mapped[UUID] = mapped_column(primary_key=True, default=uuid4)

    name: Mapped[str] = mapped_column(String(100))
    description: Mapped[str | None] = mapped_column(Text())

    created_at: Mapped[datetime]
    updated_at: Mapped[datetime]

    stages: Mapped[list["FlowStage"]] = relationship(
        back_populates="flow",
        cascade="all, delete-orphan",
    )

    fields: Mapped[list["FlowField"]] = relationship(
        back_populates="flow",
        cascade="all, delete-orphan",
    )

    records: Mapped[list["Record"]] = relationship(
        back_populates="flow",
    )

class FlowStage(Base):
    __tablename__ = "flow_stages"

    id: Mapped[UUID] = mapped_column(primary_key=True, default=uuid4)

    flow_id: Mapped[UUID] = mapped_column(
        ForeignKey("flows.id")
    )

    name: Mapped[str] = mapped_column(String(100))

    position: Mapped[int] = mapped_column(Integer)

    created_at: Mapped[datetime]

    flow: Mapped["Flow"] = relationship(
        back_populates="stages"
    )

    records: Mapped[list["Record"]] = relationship(
        back_populates="stage"
    )


class FlowField(Base):
    __tablename__ = "flow_fields"

    id: Mapped[UUID] = mapped_column(primary_key=True, default=uuid4)

    flow_id: Mapped[UUID] = mapped_column(
        ForeignKey("flows.id")
    )

    label: Mapped[str] = mapped_column(String(100))

    data_type: Mapped[str] = mapped_column(String(20))
    field_type: Mapped[str] = mapped_column(String(20))

    position: Mapped[int] = mapped_column(Integer)

    created_at: Mapped[datetime]

    flow: Mapped["Flow"] = relationship(
        back_populates="fields"
    )


class Record(Base):
    __tablename__ = "records"

    id: Mapped[UUID] = mapped_column(primary_key=True, default=uuid4)

    flow_id: Mapped[UUID] = mapped_column(
        ForeignKey("flows.id")
    )

    stage_id: Mapped[UUID] = mapped_column(
        ForeignKey("flow_stages.id")
    )

    contact_id: Mapped[UUID | None]

    title: Mapped[str] = mapped_column(String(255))

    data: Mapped[dict[str, object]] = mapped_column(
        JSON,
        default=dict,
    )

    created_at: Mapped[datetime]
    updated_at: Mapped[datetime]

    flow: Mapped["Flow"] = relationship(
        back_populates="records"
    )

    stage: Mapped["FlowStage"] = relationship(
        back_populates="records"
    )