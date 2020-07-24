const pets = [
    {
      "nome": "Spot",
      "especie": "canino",
      "imagem": require('./Components/img/spot.jpg'),
      "sobre": "Spot é um doguinho muito fofinho e com MUITA energia!",
      "castrado": "sim",
      "vacinado": "sim",
      "socializacao": "Se dá bem com humanos e outros pets",
      "idade": "1 a 3 anos",
      "peso": "18kg",
      "localizacao": "São Paulo",
      "respostasValidas": [
        ["a"],
        ["a", "b", "c"],
        ["a", "b"],
        ["a", "b", "c", "d"],
        ["a"]
      ]},
    {
      "nome": "Arya",
      "especie": "canino",
      "imagem": require('./Components/img/arya.jpg'),
      "sobre": "A Arya é extremamente dócil e calma, um ótimo cachorro pra apartamento! Ela adora crianças, mas não gosta de outros animais",
      "castrado": "sim",
      "vacinado": "sim",
      "socializacao": "Se dá bem com humanos",
      "idade": "4 a 7 anos",
      "peso": "15kg",
      "localizacao": "São Paulo",
      "respostasValidas": [
        ["a", "b"],
        ["a", "b", "c"],
        ["b"],
        ["a", "d"],
        ["a"]
      ]},
    {
      "nome": "Lia",
      "especie": "felino",
      "imagem": require('./Components/img/Lia.jpg'),
      "sobre": "Lia é uma gata tranquila e sociável. Gosta de carinho na barriga e ronrona muito!",
      "castrado": "sim",
      "vacinado": "sim",
      "socializacao": "Se dá bem com humanos",
      "idade": "4 a 7 anos",
      "peso": "5kg",
      "localizacao": "São Paulo",
      "respostasValidas": [
        ["b"],
        ["a", "b", "c"],
        ["b"],
        ["a", "d"],
        ["a"]
      ]},
    {
      "nome": "Dax",
      "especie": "canino",
      "imagem": require('./Components/img/uhura.jpeg'),
      "sobre": "Dax é uma cadelinha jovem, resgatada das ruas. Ela é um pouco medrosa, mas com a dose certa de amor, será uma super companheira!",
      "castrado": "sim",
      "vacinado": "não",
      "socializacao": "Se dá bem com humanos e outros pets",
      "idade": "1 a 3 anos",
      "peso": "10kg",
      "localizacao": "São Paulo",
      "respostasValidas": [
        ["a", "b"],
        ["a", "b", "c"],
        ["a", "b"],
        ["a", "b", "c", "d"],
        ["a"]
      ]},
    {
      "nome": "Felícia",
      "especie": "felino",
      "imagem": require('./Components/img/Felícia.jpg'),
      "sobre": "Felícia é uma gatinha muito serena, curte ficar deitada no sol e é muito comunicativa!",
      "castrado": "sim",
      "vacinado": "sim",
      "socializacao": "Se dá bem com humanos",
      "idade": "+7 anos",
      "peso": "4kg",
      "localizacao": "São Paulo",
      "respostasValidas": [
        ["b"],
        ["a", "b", "c"],
        ["b"],
        ["d"],
        ["a"]
      ]}
  ]

  export default pets;