Feature: Atualizar Imagem do Produto

  Scenario: Atualizar a imagem de um produto
    Given que faço login com as minhas credencias
    When consulto o produto através do ID {string}
    When atualizo a imagem do produto
    Then valido que a imagem foi atualizada