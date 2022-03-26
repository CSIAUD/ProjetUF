module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      listStyleType: {
        circle: 'circle'
      },
      backgroundImage: {
        'wood': "url('/assets/imgs/wood.jpg')",
        'entrance': "url('/assets/imgs/entrance.jpg')",
        'karine': "url('/assets/imgs/karine_cheval.jpg')"
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif']
      },
      colors: {
        'dark': "#120E01",
        'maroon': "#65564E",
        'green': "#AEC676",
        'beige': "rgba(175 ,166 ,154, 0.7)",
        'citation-bg': "rgb(55 ,45 ,29)",
        'citation-border': "rgb(101 ,86 ,78)"
      },
      spacing:{
        '1/20': "5%",
        '2/20': "10%",
        '3/20': "15%",
        '4/20': "20%",
        '5/20': "25%",
        '6/20': "30%",
        '7/20': "35%",
        '8/20': "40%",
        '9/20': "45%",
        '10/20': "50%",
        '11/20': "55%",
        '12/20': "60%",
        '13/20': "65%",
        '14/20': "70%",
        '15/20': "75%",
        '16/20': "80%",
        '17/20': "85%",
        '18/20': "90%",
        '19/20': "95%",
      },
      gap: {
        '1/20': "5%",
        '2/20': "10%",
        '3/20': "15%",
        '4/20': "20%",
        '5/20': "25%",
        '6/20': "30%",
        '7/20': "35%",
        '8/20': "40%",
        '9/20': "45%",
        '10/20': "50%",
        '11/20': "55%",
        '12/20': "60%",
        '13/20': "65%",
        '14/20': "70%",
        '15/20': "75%",
        '16/20': "80%",
        '17/20': "85%",
        '18/20': "90%",
        '19/20': "95%",
      },
      width: {
        'screen': '100vw',
      },
      zIndex: {
        'header': '100',
      },
      transformOrigin: {
        'center-right': "center right",
        'tRect': "10% 10%",
        'bRect': "10% 90%"
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}