# ArcGIS Geospatial Platform

## Introdução

Este repositório contém a implementação de uma plataforma geoespacial utilizando ArcGIS. A plataforma foi desenvolvida para fornecer ferramentas avançadas de análise e visualização de dados geoespaciais, permitindo aos usuários explorar, analisar e compartilhar informações geográficas de maneira eficiente.

### Execução

1.Clonar o repositório

```
git clone https://github.com/dabesil/arcgis-geospatial-platform.git
```

2. Navegue até o diretório do projeto:

```
cd arcgis-geospatial-platform
```

3. Configure as variáveis de ambiente no arquivo `.env`

```
VITE_BASEMAP="arcgis/outdoor"
VITE_ARCGIS_API_LAYER_BAIRROS_URL=""
VITE_ARCGIS_API_LAYER_EIXOS_URL=""
VITE_ARCGIS_API_LAYER_PLANEJAMENTO_URL=""
VITE_ARCGIS_API_LAYER_PONTOS_URL=""
```

4. Instale as dependências e execite a aplicação em modo de desenvolvimento

```
npm install
npm run dev
```

5. Para construir a aplicação para produção:

```
npm run build
```

### Tecnologias Utilizadas

- **Vue.js**: Framework JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida e moderna para desenvolvimento web.
- **ArcGIS API for JavaScript**: Biblioteca para trabalhar com mapas e dados geoespaciais.
- **Vite Plugins**: Plugins utilizados para melhorar a experiência de desenvolvimento e build.

## Funcionamento

A plataforma utiliza a API do ArcGIS para integrar dados geoespaciais e fornecer uma interface interativa para os usuários. As principais funcionalidades incluem:

- **Visualização do Mapa**:
  > Possibilidade de navegar pela instancia `outdoor` do mapa ArcGis, podendo visualizar detalhadamente regiões do planeta.
- **Informações de Bairros**:
  > Possibilidade de selecionar ou pesquisar por determinado bairro e exibir as informações do mesmo.
- **Camadas**:
  > Possibilidade de exibir camadas diferentes de informações no mapa, as camadas disponíveis são: Bairros, Eixos (ruas, avenidas), Pontos Cotados e Região de Planejamento.

### Implementação

A estrutura foi dividida em componentes que irão realizar funções específicas:

- **Panel**
  > Componente responsável por contemplar os outros componentes
- **Header**
  > Cabeçalho da aplicação, reponsável por exibir o nome e pelos botões de ação de filtragem e menu, controla a visualização dos componentes Drawer e Filter
- **Filter**
  > Popup responsável por executar a consulta por bairro, irá emitir o bairro a ser consultado para o componente Map
- **Drawer**
  > Drawer responsável por exibir as informações do bairro, os dados são atualizados dinamicamente de acordo com o bairro selecionado, irá ser exibido na direita da tela.
- **Map**
  > Componente principal da aplicação, responsável por instanciar o mapa e controlar seus widgets e camadas, irá receber as informações de filtragem e executar a consulta repassando o resultado para o drawer através do vuex.

Para gerenciamento de estado foi utilizada a tecnologia Vuex, para armazenamento da referência do mapa para as atualizações reativas no mesmo, controle da exibição do drawer e reatividade dos dados que serão exibidos no drawer.
