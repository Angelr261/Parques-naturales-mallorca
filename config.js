var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYW5nZWxyYWxhcmNvbjI2MSIsImEiOiJjbWo4cWxqa2swMzJtM2NzYnhsYW41a3R4In0.eBlOpPhaPFQIYYmh7wvW9Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Parques naturales de Mallorca',
    subtitle: 'Storymaps de parques naturales de la isla de Mallorca',
    byline: 'By Angel Rodríguez Alarcón',
    footer: 'Fuente: Consell Balear, Gobierno de España',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Paraje natural Sierra de Tramuntana',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Vista_a%C3%A8ria_S%27Albufera.JPG/330px-Vista_a%C3%A8ria_S%27Albufera.JPG',
            description: 'El Paraje natural Sierra de Tramuntana es una zona en la parte norte de la isla que no posee la consideracion de parque natural pero posee un nivel de proteccion similar. Es muy interesante porque incluye zonas naturales y zonas urbanas. Aqui encontramos el pico Puig Major o la Comuna de Fornalax',
            location: {
                center: [2.78, 39.79],
                zoom: 12.5,
                pitch:65.50 ,
                bearing: 129.76
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Parque natural de Mondrago',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mallorca_sch%C3%B6nste_Str%C3%A4nde_Cala_Amarador_%2830182046834%29.jpg/330px-Mallorca_sch%C3%B6nste_Str%C3%A4nde_Cala_Amarador_%2830182046834%29.jpg',
            description: 'El Parque Natural de Mondragón es un espacio natural protegido español situado al sureste de la isla de Mallorca, en el municipio de Santañí, comunidad autónoma de las Islas Baleares, que fue declarado parque natural en 1992. Con una formación de acantilados y vegetación de pino, matorral y cultivo tradicional es uno de los parques más visitados de la isla.',
            location: {
                center: [3.175878297609525, 39.35789083684557],
                zoom: 12.5,
                pitch:65.50 ,
                bearing: 129.76,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Parque natural de la peninsula de Llevant',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Arrecife_de_las_Sirenas.jpg/330px-Arrecife_de_las_Sirenas.jpg',
            description: 'La peninsula de LLevant es uno de los parques mas bonitos de toda la isla con gran presencia de especies endemicas. Se necesita permiso para su visita.',
            location: {
                center: [3.352741353833451, 39.75071477223486],
                zoom: 12.52,
                pitch: 73.50,
                bearing: -105.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Parque natural de SAlbufera',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Es_salobrar.JPG/330px-Es_salobrar.JPG',
            description: 'El Parque Natural de la Albufera de Mallorca es un espacio natural protegido español situado en la isla de Mallorca, comunidad autónoma de las Islas Baleares. Se trata de la zona húmeda más extensa y de mayor importancia de las Islas Baleares, una antigua laguna separada del mar por un cordón de dunas, que durante muchos siglos, sobre todo en los dos últimos y por influencia humana, se ha colmado de sedimentos hasta convertirse en una extensa llanura inundable',
            location: {
                center: [3.12, 39.79],
                zoom: 12.5,
                pitch: 66.50,
                bearing: 7.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
