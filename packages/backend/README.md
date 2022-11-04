# Backend design

## REST API for managing district heating operators


POST /operators/
- name: str
- power: float
- type: str(provider or consumer)
- threshold_temperature: float. null for type=consumer
- latitude: float
- longitude: float

GET /operators/

GET /operators/id/
- from POST /operators/
- neighbors: list of ids
