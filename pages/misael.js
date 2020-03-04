const App = () => {

  return (<>
  
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <link rel="stylesheet" href="css/desktop.css">
  <title>Frontend Mentor | Four card feature section</title>
</head>
  
  <main class="general">

    
    <header>
      <h1 class="firstheader">Reliable, efficient delivery</h1>
      <h1 class="lastheader">Powered by Technology</h1>
    </header>

    
    <p>Our Artificial Intelligence powered tools use millions of project data points
      to ensure that your project is successful</p>

    
    <div class="grid-layout">
      
      <div class="grid">
        <section class="cards card01">
          <h2>Supervisor</h2>
          <p>Monitors activity to identify project roadblocks</p>
          <img src="images/icon-supervisor.svg" alt="">
        </section>
      </div>

      
      <div class="grid">
        <section class="cards card02">
          <h2>Team Builder</h2>
          <p>Scans our talent network to create the optimal team for your project</p>
          <img src="images/icon-team-builder.svg" alt="">
        </section>

        <section class="cards card03">
          <h2>Karma</h2>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img src="images/icon-karma.svg" alt="">
        </section>
      </div>
    
      <div class="grid">
        <section class="cards card04">
          <h2>Calculator</h2>
          <p>Uses data from past projects to provide better delivery estimates</p>
          <img src="images/icon-calculator.svg" alt="">
        </section>
      </div>

      
      <div class="clear"></div>
    </div>
    
  </main>

  
  <footer>
    <p class="andpage">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">github: Misael-S</a>.
    </p>
  </footer>
  
  </>);

};
