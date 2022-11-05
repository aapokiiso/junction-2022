# Backend design

## REST API for managing district heating operators


PATCH /nodes/id/
- power: float

GET /nodes/
- nodes:
  - from POST /nodes/
  - name: str
  - type: str(provider or consumer or junction)
  - latitude: float
  - longitude: float
  - neighbors: list of ids
- (edges:)
