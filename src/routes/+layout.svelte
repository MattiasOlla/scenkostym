<main>
  <slot />
</main>

<style>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
  }

  main {
    max-width: 1200px;
    margin: 0 auto;
  }

  :global(.page-title) {
    text-align: center;
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.5px;
  }

  :global(.profile-container) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    align-items: start;
  }

  @media (min-width: 768px) {
    :global(.page-title) {
      font-size: 3.5rem;
      margin-bottom: 4rem;
    }

    :global(.profile-container) {
      gap: 40px;
    }
  }
</style>
