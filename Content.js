
const Team = document.querySelector('.Team');

if(Team){
    const adhamdiv = document.createElement('div');
    adhamdiv.style.margin = '20px 0px';

    adhamdiv.innerHTML = `
        <button class="adham-btn" onclick="const params = new URLSearchParams(window.location.search);
  let game = parseInt(params.get('game')) || 0;
  if(game > 0){
  game--;
  params.set('game', game);
  const newUrl = window.location.pathname + '?' + params.toString();
  window.location.href = newUrl;}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
    </button>
    <button class="adham-btn" onclick="const params = new URLSearchParams(window.location.search);
  let game = parseInt(params.get('game')) || 0;
  game++;
  params.set('game', game);
  const newUrl = window.location.pathname + '?' + params.toString();
  window.location.href = newUrl;">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
</button>
    `;
    
    if(Team.children.length >=1){
        Team.insertBefore(adhamdiv, Team.children[1]);
    }else{
        Team.appendChild(adhamdiv);
    }
}