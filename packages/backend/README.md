# Backend design

## REST API for managing district heating operators


PUT /nodes/id/
- name: str
- power: float
- type: str(provider or consumer or junction)
- threshold_temperature: float. null for type=consumer 
- latitude: float
- longitude: float

GET /nodes/
- nodes:
  - from POST /nodes/
  - neighbors: list of ids
- (edges:)
