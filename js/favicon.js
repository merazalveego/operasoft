<script>
  function setFavicon() {
    const lightFavicon = document.getElementById("favicon-light");
    const darkFavicon = document.getElementById("favicon-dark");
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      lightFavicon.setAttribute("rel", "alternate icon");
      darkFavicon.setAttribute("rel", "icon");
    } else {
      lightFavicon.setAttribute("rel", "icon");
      darkFavicon.setAttribute("rel", "alternate icon");
    }
  }

  // Initial favicon set
  setFavicon();

  // Listen for changes in the theme preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);
</script>
