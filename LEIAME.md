# App de treino (PWA) — fase 1

Funções desta fase: importar o `treino.json`, escolher a semana, tela "Hoje", registro por série, timer de descanso, histórico e backup.

## Arquivos

| Arquivo | Para quê |
|---|---|
| `index.html` | O app inteiro (HTML, CSS e JavaScript, sem bibliotecas) |
| `manifest.json` | Nome, ícone e cor para instalar na tela inicial |
| `sw.js` | Guarda o app no celular para funcionar sem internet |
| `icon-192.png`, `icon-512.png` | Ícones |
| `LEIAME.md` | Este guia (não precisa publicar) |

O `treino.json` **não** vai junto com o app: você importa dentro dele. Seus registros nunca saem do celular.

---

## 1. Publicar de graça

O app precisa de um endereço `https://` para instalar e funcionar offline. Escolha uma das opções.

### Opção A — GitHub Pages (recomendada: fica no ar sem prazo)

1. Crie uma conta grátis em **github.com**.
2. No canto superior direito, toque em **+** → **New repository**.
   - Nome: `treino` (ou outro).
   - Deixe **Public** (o GitHub Pages grátis exige repositório público; o código fica visível, seus dados não).
   - **Create repository**.
3. Na página do repositório, toque em **uploading an existing file** (ou **Add file → Upload files**).
4. Arraste `index.html`, `manifest.json`, `sw.js`, `icon-192.png` e `icon-512.png` → **Commit changes**.
5. Vá em **Settings → Pages**. Em **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**, pasta **/ (root)** → **Save**
6. Espere 1 ou 2 minutos e recarregue a página. O endereço aparece no topo:
   `https://SEU-USUARIO.github.io/treino/`

> Nunca suba seus arquivos de backup para o repositório: ele é público.

### Opção B — Netlify Drop (mais rápido, mas exige conta para manter)

1. No computador, abra **app.netlify.com/drop** e arraste a pasta com os 5 arquivos.
2. Sai um endereço do tipo `https://nome-aleatorio.netlify.app`.
3. **Crie a conta e reivindique o site ("claim") na hora.** Site enviado sem conta expira sozinho, em cerca de 1 hora.
4. Para atualizar depois: no painel do site, aba **Deploys**, arraste a pasta de novo.

---

## 2. Instalar na tela inicial

### Android (Chrome)

1. Abra o endereço no **Chrome**.
2. Menu **⋮** → **Instalar app** (em alguns aparelhos: **Adicionar à tela inicial** → **Instalar**).
3. Abra sempre pelo ícone **Treino**.

### iPhone (Safari)

1. Abra o endereço no **Safari**.
2. Toque em **Compartilhar** (quadrado com seta para cima). No iOS 26, ele fica no menu **⋯** ao lado da barra de endereço.
3. Role e toque em **Adicionar à Tela de Início**. Se aparecer **Abrir como App Web**, deixe ligado → **Adicionar**.
4. Abra sempre pelo ícone **Treino**.

> **No iPhone, o app instalado guarda dados separados do Safari.** Importe o treino e registre tudo pelo ícone da tela inicial, não pela aba do Safari, senão os dados ficam no lugar errado.

---

## 3. Primeiro uso

1. Leve o `treino.json` para o celular: mande para você mesmo (WhatsApp, e-mail, Drive) e salve em **Arquivos** (iPhone) ou **Downloads** (Android).
   - Alternativa: abra o arquivo no celular, copie todo o texto e use **ou colar o texto** no app.
2. No app: **Selecionar treino.json** → escolha o arquivo.
   - Se algo estiver errado no JSON, aparece a lista do que corrigir, com a posição.
   - Com o seu arquivo atual aparece um aviso sobre `total_min` das semanas 7 e 8. É esperado: o app usa a conta (correr + andar) × repetições.
3. Confirme a **data de início do plano**. O app sugere o próximo dia do Treino A.
4. Vá em **Ajustes → Alertas do descanso → Testar alerta** e ajuste o volume.

---

## 4. Na academia

- **Hoje** abre no treino do dia (sábado = A, domingo = B). Em outro dia, troque a aba ou a data.
- Cada série já vem preenchida com o que você fez na última sessão. Fez igual? Toque só no **✓**. Mudou? Toque no número, digite e toque no **✓**.
- Carga em branco = sem carga (peso do corpo). Aceita vírgula: `42,5`.
- Ao tocar no **✓**, o timer de descanso começa. Ele avisa (som e vibração) ao chegar no **mínimo** da faixa e de novo no **máximo**. **Parar** encerra.
- Errou um número? Toque na série verde para editar ou excluir. Dá para fazer o mesmo pelo **Histórico**.
- **Semana:** toque em "Semana X de 12" no topo. Se repetir uma semana, use **−**; o app passa a contar a partir dali.

---

## 5. Backup

- **Ajustes → Backup**:
  - **Baixar backup (.json)**: no Android vai para Downloads.
  - **Compartilhar / salvar em…** (aparece quando o aparelho suporta): no iPhone, escolha **Salvar em Arquivos**, Drive ou e-mail.
- Depois de 14 dias sem exportar, a tela Hoje mostra um aviso.
- **Restaurar:** Ajustes → Backup → Restaurar backup. Em celular novo, use **"Já usava o app em outro aparelho?"** na primeira tela.

---

## 6. Atualizar o app (fases 2 e 3)

1. Substitua os arquivos:
   - GitHub: **Add file → Upload files** com os mesmos nomes (sobrescreve) → **Commit changes**.
   - Netlify: arraste a pasta de novo em **Deploys**.
2. **Troque a linha `VERSAO` no `sw.js`** (ex.: `'treino-v1.0.0'` → `'treino-v1.0.1'`). Sem isso, o celular continua usando a versão guardada.
3. Abra o app com internet. Aparece **"Nova versão do app pronta" → Atualizar**. Se não aparecer, feche o app por completo e abra de novo. Seus dados continuam.

---

## 7. Testar o modo offline

Abra o app uma vez com internet, feche, ligue o **modo avião** e abra pelo ícone. Tem que abrir normalmente.

---

## 8. Limitações conhecidas

- **iPhone:** o Safari não tem vibração para sites e apps web; o aviso é só som e a tela piscando. Com o modo silencioso ligado, o bipe pode não tocar.
- **Tela bloqueada:** com a tela apagada, o celular pausa o app e o bipe não toca na hora. Enquanto o timer roda, o app pede para manter a tela acesa (Android com Chrome; iPhone com iOS 18.4 ou mais novo no app instalado). Ao voltar, o tempo mostrado continua certo.
- **Android:** o bipe usa o volume de mídia.
- **Fica para as próximas fases:** cronômetro e registro da corrida, importação do relógio (TCX), sugestão de carga, esforço e dor, gráficos e resumo semanal.
