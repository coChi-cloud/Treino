/* Service worker do app Treino
   - Guarda os arquivos do app no cache para funcionar offline.
   - IMPORTANTE: ao publicar qualquer mudança no app, troque VERSAO abaixo
     (ex.: 'treino-v1.7.0'). É assim que o celular percebe a atualização.
   - A versão nova se ativa sozinha; o app recarrega quando não há treino em andamento. */
const VERSAO = 'treino-v1.7.0';
const ARQUIVOS = ['./', './index.html', './manifest.json', './icone-192.png', './icone-512.png'];

self.addEventListener('install', evento => {
  // cache: 'reload' ignora o cache HTTP do servidor e baixa a versão nova de verdade
  evento.waitUntil(
    caches.open(VERSAO).then(cache => cache.addAll(ARQUIVOS.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting()) // 1.3.0: a versão nova assume sozinha; a página decide quando recarregar
  );
});

self.addEventListener('activate', evento => {
  evento.waitUntil((async () => {
    const nomes = await caches.keys();
    await Promise.all(nomes.filter(n => n.startsWith('treino-') && n !== VERSAO).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

// A página pede para ativar a versão nova quando você toca em "Atualizar"
self.addEventListener('message', evento => {
  if (evento.data === 'pular-espera') self.skipWaiting();
});

// Cache primeiro: abre instantâneo e funciona sem internet
self.addEventListener('fetch', evento => {
  const req = evento.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    evento.respondWith(
      caches.match('./index.html', { ignoreSearch: true }).then(r => r || fetch(req))
    );
    return;
  }
  evento.respondWith(
    caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req))
  );
});
