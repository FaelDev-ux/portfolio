# Instruções para Adicionar seu Robô 3D

## Como adicionar a URL do seu robô Spline:

1. Abra o arquivo `components/Hero.tsx`
2. Encontre a linha que contém:
   ```tsx
   scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
   ```
3. Substitua pela URL do seu robô 3D do Spline
4. A URL deve ser no formato: `https://prod.spline.design/SEU_ID/scene.splinecode`

## Onde encontrar a URL do Spline:

1. Acesse seu projeto no Spline
2. Clique em "Export" ou "Publish"
3. Copie a URL do arquivo `.splinecode`
4. Cole no lugar indicado acima

## Nota:

O robô 3D está configurado na seção Hero e já inclui:
- Efeito Spotlight (brilho interativo)
- Carregamento com loading spinner
- Design responsivo para mobile e desktop
- Tema preto e branco integrado

