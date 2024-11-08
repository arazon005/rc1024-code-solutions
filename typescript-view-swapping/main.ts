const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');

if (!$tabContainer) throw new Error('$tabContainer query failed');
if (!$tabs) throw new Error('$tabs query failed');
if (!$views) throw new Error('$views query failed');

$tabContainer.addEventListener('click', (event) => {
  const $eventTarget = event.target as HTMLDivElement;
  const $dataView = $eventTarget.getAttribute('data-view');
  for (let i = 0; i < $tabs.length; i++) {
    if ($eventTarget === $tabs[i]) {
      $tabs[i].className = 'tab active';
    } else {
      $tabs[i].className = 'tab';
    }
  }
  for (let i = 0; i < $views.length; i++) {
    if ($dataView === $views[i].getAttribute('data-view')) {
      $views[i].className = 'view';
    } else {
      $views[i].className = 'hidden';
    }
  }
});
