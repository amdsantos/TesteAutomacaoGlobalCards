Feature: Teste de API

  Scenario: Validar resposta da API
    Given que faço uma requisição GET para "/api/produtos"
    Then recebo um retorno com status 200
    And a resposta contem "Produto"