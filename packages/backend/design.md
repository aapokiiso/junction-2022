# Backend design

## REST API for managing district heating operators


POST /operators/
    name: str
    power: float
    type: str(provider or consumer)
    threshold_temperature: float. null for type=operator
    latitude: float
    longitude: float

GET /operators/
GET /operators/<id>/
    - from POST /providers/
    neighbors: list of ids