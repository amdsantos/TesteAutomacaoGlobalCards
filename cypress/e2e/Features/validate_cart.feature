Feature: Inserir carrinho

  Scenario: Validar carrinho
    Given faço login na plataforma e acesso o carrinho
    When verifico os itens nele
    Then finalizo a compra dos itens 