from pydantic import BaseModel
from typing import List, Optional
# from datetime import datetime

class symptom_array(BaseModel):
    # id: int
    # name = 'random_person'
    # signup_ts: Optional[datetime] = None
    arr: List[int] = []
