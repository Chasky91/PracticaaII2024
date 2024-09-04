const listaClientes = {
    "customers": [
      {
        "nombre": "Carlos García",
        "correo": "carlos.garcia@example.com",
        "telefono": 5551234,
        "pedidos": [
            {
                "producto": "Café Americano",
                "cantidad": 1, 
                "precio": 2.50
            },
            {
                "producto": "Muffin de Arándanos",
                "cantidad": 2,
                "precio": 3.00
            }
        ],
        "miembro": true
      },
      {
        "nombre": "María López",
        "correo": "maria.lopez@example.com",
        "telefono": 5555678,
        "pedidos": [
          {"producto": "Café Latte", "cantidad": 1, "precio": 3.50},
          {"producto": "Croissant", "cantidad": 1, "precio": 2.00}
        ],
        "miembro": false
      },
      {
        "nombre": "Ana Rodríguez",
        "correo": "ana.rodriguez@example.com",
        "telefono": "555-8765",
        "pedidos": [
          {"producto": "Té Verde", "cantidad": 2, "precio": 2.00},
          {"producto": "Tarta de Limón", "cantidad": 1, "precio": 4.00}
        ],
        "miembro": true
      },
      {
        "nombre": "Luis Fernández",
        "correo": "luis.fernandez@example.com",
        "telefono": "555-4321",
        "pedidos": [
          {"producto": "Espresso", "cantidad": 1, "precio": 2.00},
          {"producto": "Sandwich de Jamón y Queso", "cantidad": 1, "precio": 4.50}
        ],
        "miembro": false
      },
      {
        "nombre": "Sofía Martínez",
        "correo": "sofia.martinez@example.com",
        "telefono": "555-9876",
        "pedidos": [
          {"producto": "Café Mocha", "cantidad": 1, "precio": 3.75},
          {"producto": "Galleta de Chocolate", "cantidad": 3, "precio": 1.50}
        ],
        "miembro": true
      }
    ]
  }
  

export default listaClientes

