// ==========================
// LISTA DE PRODUTOS COM ID AUTOMÁTICO
// ==========================
const produtos = [

  {
    nome: "Pastel Festa", preco: 1.49, foto: "img/pastelF.png", categoria: "Salgados", tipo: "und", ativo: 1,
    grupos: [
      {
        nome: "Recheios",
        obrigatorio: false,
        min: 1,
        max: 1,
        opcoes: [
          { nome: "BACON", preco: 0, ativo: 1 },
          { nome: "FRANGO", preco: 0, ativo: 1 },
          { nome: "CHARQUE", preco: 0, ativo: 1 },
          { nome: "PRESUNTO", preco: 0, ativo: 1 },
          { nome: "CATUPIRY", preco: 0, ativo: 1 },
          { nome: "CHEDDAR", preco: 0, ativo: 1 },
          { nome: "CALABRESA", preco: 0, ativo: 1 },
          { nome: "CARNE MOIDA", preco: 0, ativo: 1 },
          { nome: "QUEIJO COALHO", preco: 0, ativo: 1 },
          { nome: "QUEIJO MUSSARELA", preco: 0, ativo: 1 },
          { nome: "CREME DE CAMARÃO", preco: 0, ativo: 1 },
        ]
      },
    ]
  },


  {
    nome: "Pastel Pequeno", preco: 1.99, foto: "img/pastelP.png", categoria: "Salgados", tipo: "und", ativo: 1,
    grupos: [
      {
        nome: "Recheios",
        obrigatorio: false,
        min: 1,
        max: 2,
        opcoes: [
          { nome: "BACON", preco: 0, ativo: 1 },
          { nome: "FRANGO", preco: 0, ativo: 1 },
          { nome: "CHARQUE", preco: 0, ativo: 1 },
          { nome: "PRESUNTO", preco: 0, ativo: 1 },
          { nome: "CATUPIRY", preco: 0, ativo: 1 },
          { nome: "CHEDDAR", preco: 0, ativo: 1 },
          { nome: "CALABRESA", preco: 0, ativo: 1 },
          { nome: "CARNE MOIDA", preco: 0, ativo: 1 },
          { nome: "QUEIJO COALHO", preco: 0, ativo: 1 },
          { nome: "QUEIJO MUSSARELA", preco: 0, ativo: 1 },
          { nome: "CREME DE CAMARÃO", preco: 0, ativo: 1 },
        ]
      },
    ]
  },

  {
    nome: "Pastel Grande", preco: 9.99, foto: "img/pastelG.png", categoria: "Salgados", tipo: "und", ativo: 1,
    grupos: [
      {
        nome: "Recheios",
        obrigatorio: false,
        min: 1,
        max: 3,
        opcoes: [
          { nome: "BACON", preco: 0, ativo: 1 },
          { nome: "FRANGO", preco: 0, ativo: 1 },
          { nome: "CHARQUE", preco: 0, ativo: 1 },
          { nome: "PRESUNTO", preco: 0, ativo: 1 },
          { nome: "CATUPIRY", preco: 0, ativo: 1 },
          { nome: "CHEDDAR", preco: 0, ativo: 1 },
          { nome: "CALABRESA", preco: 0, ativo: 1 },
          { nome: "CARNE MOIDA", preco: 0, ativo: 1 },
          { nome: "QUEIJO COALHO", preco: 0, ativo: 1 },
          { nome: "QUEIJO MUSSARELA", preco: 0, ativo: 1 },
          { nome: "CREME DE CAMARÃO", preco: 0, ativo: 1 },
        ]
      },
      {
        nome: "Opcionais",
        obrigatorio: false,
        min: 0,
        max: 10,
        // pode escolher todos
        opcoes: [
          { nome: "CEBOLA", preco: 0, ativo: 1 },
          { nome: "TOMATE", preco: 0, ativo: 1 },
          { nome: "MILHO VERDE", preco: 0, ativo: 1 },
          { nome: "DUETO", preco: 0, ativo: 1 },
          { nome: "AZEITONA", preco: 0, ativo: 1 },
          { nome: "CENOURA", preco: 0, ativo: 1 },
          { nome: "BETERRABA", preco: 0, ativo: 1 },
          { nome: "UVA PASSA", preco: 0, ativo: 1 },
          { nome: "OVOS DE CODORNA", preco: 0, ativo: 1 },
          { nome: "COMPLETO", preco: 0, ativo: 1 },
        ]
      }
    ]
  },

  {
    nome: "Esfiha", preco: 1.99, foto: "img/esfiha.png", categoria: "Salgados", tipo: "und", ativo: 1,
    variacoes: [
      { nome: "CARNE MOIDA", ativo: 1 },
      { nome: "FRANGO", ativo: 1 },
    ]
  },
  { nome: "Enroladinho De Salsicha", preco: 1.99, foto: "img/enroladinho.png", categoria: "Salgados", tipo: "und", ativo: 1, },
  {
    nome: "Empada", preco: 2.49, foto: "img/empada.png", categoria: "Salgados", tipo: "und", ativo: 1,
    variacoes: [
      { nome: "CAMARÃO", ativo: 1 },
      { nome: "FRANGO", ativo: 1 },
    ]
  },
  { nome: "Pãozinho Sem Recheio Pequeno", preco: 0.99, foto: "img/paozinho.png", categoria: "Salgados", tipo: "und", ativo: 1, },
  {
    nome: "Pãozinho Com Recheio Pequeno", preco: 1.99, foto: "img/paozinho.png", categoria: "Salgados", tipo: "und", ativo: 1,
    variacoes: [
      { nome: "CATUPIRY", ativo: 1 },
      { nome: "CHEDDAR", ativo: 1 },
    ]
  },

  { nome: "Pãozinho Sem Recheio Grande", preco: 1.99, foto: "img/paozinho.png", categoria: "Salgados", tipo: "und", ativo: 1, },
  {
    nome: "Pãozinho Com Recheio Grande", preco: 3.99, foto: "img/paozinho.png", categoria: "Salgados", tipo: "und", ativo: 1,
    grupos: [
      {
        nome: "Recheios",
        obrigatorio: false,
        min: 1,
        max: 1,
        // pode escolher todos
        opcoes: [
          { nome: "TOSCANA", preco: 0, ativo: 1 },
          { nome: "CREME DE FRANGO", preco: 0, ativo: 1 },
          { nome: "CREME DE CAMÃRAO", preco: 0, ativo: 1 },
          { nome: "CREAM CHEESER", preco: 2.00, ativo: 1 },
        ]
      }
    ]
  },
  {
    nome: "Coxinha Pequena", preco: 4.99, foto: "img/coxinhaP.png", categoria: "Salgados", tipo: "und", ativo: 1,
    variacoes: [
      { nome: "FRANGO", ativo: 1 },
      { nome: "FRANGO COM REQUEIJÃO", ativo: 1 },
    ]
  },
  {
    nome: "Coxinha Grande", preco: 4.99, foto: "img/coxinhaG.png", categoria: "Salgados", tipo: "und", ativo: 1,
    variacoes: [
      { nome: "FRANGO", ativo: 1 },
      { nome: "FRANGO COM REQUEIJÃO", ativo: 1 },
      { nome: "CHARQUE", ativo: 1 },
      { nome: "CHARQUE COM REQUEIJÃO", ativo: 1 },
    ]
  },
  { nome: "Bolinho De Bacalhau", preco: 2.00, foto: "img/bolinho.png", categoria: "Salgados", tipo: "und", ativo: 1, },
  { nome: "Bolinha De queijo", preco: 0.99, foto: "img/bolinhoQ.png", categoria: "Salgados", tipo: "und", ativo: 1, },
  { nome: "Risole Misto", preco: 0.99, foto: "img/risole.png", categoria: "Salgados", tipo: "und", ativo: 1, },
  {
    nome: "Mini Pizza", preco: 1.99, foto: "img/pizza.png", categoria: "Salgados", tipo: "und", ativo: 1,
    variacoes: [
      { nome: "Calabresa", ativo: 1 },
      { nome: "Mussarela", ativo: 1 },
    ]
  },
  {
    nome: "Pote de Salgadinho", preco: 4.99, foto: "img/salgadinho.png", categoria: "Salgados", tipo: "und", ativo: 1,
    variacoes: [
      { nome: "QUEIJO", ativo: 1 },
      { nome: "CEBOLA", ativo: 1 },
    ]
  },

  //DOCES: 
  {
    nome: "Pãozinho Com Recheio Grande", preco: 3.99, foto: "img/paozinho.png", categoria: "Doces", tipo: "und", ativo: 1,
    grupos: [
      {
        nome: "Recheios",
        obrigatorio: false,
        min: 1,
        max: 1,
        // pode escolher todos
        opcoes: [
          { nome: "NUTELLA", preco: 0, ativo: 1 },
          { nome: "BRIGADEIRO", preco: 0, ativo: 1 },
          { nome: "DOCE DE LEITE", preco: 0, ativo: 1 },
        ]
      }
    ]
  },
  {nome: "Fatia De Bolo Prestigio", preco: 9.99, foto: "img/boloP.png", categoria: "Doces", tipo: "und", ativo: 1,},
  {nome: "Fatia De Bolo Chocolate", preco: 9.99, foto: "img/boloC.png", categoria: "Doces", tipo: "und", ativo: 1,},


  //Bebidas:
  {nome: "Coca Cola 250ml", preco: 2.99, foto: "img/coca.png", categoria: "Bebidas", tipo: "und", ativo: 1,},
  {nome: "Coca Cola Lata 350ml", preco: 3.99, foto: "img/cocaLt.jpg", categoria: "Bebidas", tipo: "und", ativo: 1,},
  {nome: "Coca Cola 2 Litros", preco: 10.99, foto: "img/coca2.jpg", categoria: "Bebidas", tipo: "und", ativo: 1,},
  {nome: "Sprite 250ml", preco: 1.99, foto: "img/sprite.png", categoria: "Bebidas", tipo: "und", ativo: 1,},
  {nome: "sprite 2 Litros", preco: 8.99, foto: "img/sprite2.png", categoria: "Bebidas", tipo: "und", ativo: 1,},
  {nome: "Fanta 250ml", preco: 2.99, foto: "img/fantaP.jpeg", categoria: "Bebidas", tipo: "und", ativo: 1,},
  {nome: "Fanta 2 Litros", preco: 8.99, foto: "img/fanta2.jpeg", categoria: "Bebidas", tipo: "und", ativo: 1,},
  {nome: "Guaraná Antarctica 200ml", preco: 2.49, foto: "img/antarctica.png", categoria: "Bebidas", tipo: "und", ativo: 1,},
  {nome: "Guaraná Santa Joana 2 Litros Guaraná", preco: 4.99, foto: "img/santaG.png", categoria: "Bebidas", tipo: "und", ativo: 1,},
  {nome: "Guaraná Santa Joana 2 Litros Cola", preco: 4.99, foto: "img/santaC.png", categoria: "Bebidas", tipo: "und", ativo: 1,},
  {nome: "Àgua Mineral 500ml", preco: 1.49, foto: "img/agua500.jpg", categoria: "Bebidas", tipo: "und", ativo: 1,},
  {nome: "Àgua Mineral 1,5 Litros", preco: 2.99, foto: "img/agua1,5.png", categoria: "Bebidas", tipo: "und", ativo: 1,},
  
];

// Gerar ID automaticamente
produtos.forEach((p, i) => p.id = i + 1);

// ==========================
// CUPONS DE DESCONTO
// ==========================
const cupons = {
  "DESCONTO10": 0.10,
  "BOASVINDAS": 0.05
};

// ==========================
// CARRINHO
// ==========================
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let descontoVal = 0;
let taxaEntrega = 0;

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// ==========================
// RENDERIZAR PRODUTOS
// ==========================
function renderProdutos(filtro = "", categoriaFiltro = "") {
  const area = document.getElementById("produtos");
  area.innerHTML = "";

  let lista = produtos.filter(p => p.ativo === 1);

  if (filtro.trim() !== "") {
    lista = lista.filter(p => p.nome.toLowerCase().includes(filtro.toLowerCase()));
  }

  if (categoriaFiltro.trim() !== "") {
    lista = lista.filter(p => p.categoria === categoriaFiltro);
  }

  const categorias = [...new Set(lista.map(p => p.categoria))];

  categorias.forEach(cat => {
    area.innerHTML += `<h2 class="category-title">${cat}</h2>`;

    lista
      .filter(p => p.categoria === cat)
      .forEach(prod => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <div class="thumb">
            <img src="${prod.foto}">
          </div>
          <h3>${prod.nome}</h3>
          <div class="price-row">
  <div class="price">
    R$ ${prod.preco.toFixed(2)} ${prod.tipo === "kg" ? "/KG" : ""}${prod.tipo === "und" ? "/UND" : ""}
  </div>
</div>

          <button class="add-btn" onclick="addCarrinho(${prod.id})">Adicionar</button>
        `;
        area.appendChild(card);
      });
  });
}

renderProdutos();

// ==========================
// BUSCA
// ==========================
document.getElementById("busca").addEventListener("input", e => {
  renderProdutos(e.target.value);
});

// ==========================
// BOTÃO DE CATEGORIAS
// ==========================
const btnCategorias = document.createElement("button");
btnCategorias.innerText = "Categorias";
btnCategorias.className = "btn-categorias";
document.querySelector(".top-actions").appendChild(btnCategorias);

const menuCategorias = document.createElement("div");
menuCategorias.className = "menu-categorias";
menuCategorias.style.display = "none";
document.querySelector(".top-actions").appendChild(menuCategorias);

[...new Set(produtos.map(p => p.categoria))].forEach(cat => {
  const b = document.createElement("button");
  b.innerText = cat;
  b.onclick = () => {
    renderProdutos("", cat);
    menuCategorias.style.display = "none";
  };
  menuCategorias.appendChild(b);
});

btnCategorias.onclick = () => {
  menuCategorias.style.display = menuCategorias.style.display === "block" ? "none" : "block";
};

// ==========================
// ADICIONAR AO CARRINHO
// ==========================
function addCarrinho(id) {
  const p = produtos.find(x => x.id === id);
  if (!p || p.ativo === 0) return alert("Este item está inativo!");

  let escolhaVariacao = "";
  let precoEscolhido = p.preco;

  // ==========================
  // VARIAÇÕES SIMPLES
  // ==========================
  if (p.variacoes && !p.grupos) {
    const variacoesAtivas = p.variacoes.filter(v => v.ativo === 1);
    if (!variacoesAtivas.length) return alert("Nenhuma variação disponível!");

    let opcoes = variacoesAtivas
      .map((v, i) => `${i + 1} - ${v.nome}`)
      .join("\n");

    let sel = prompt(`Escolha um sabor:\n${opcoes}`);
    if (sel === null) return;

    sel = parseInt(sel);
    if (isNaN(sel) || sel < 1 || sel > variacoesAtivas.length)
      return alert("Opção inválida!");

    escolhaVariacao = variacoesAtivas[sel - 1].nome;
  }

  // ==========================
  // GRUPOS (PASTEL / RECHEIOS)
  // ==========================
  if (p.grupos) {
    let adicionais = [];
    let valorAdicionais = 0;

    for (const grupo of p.grupos) {
      const opcoesAtivas = grupo.opcoes.filter(o => o.ativo === 1);

      while (true) {
        let texto = `${grupo.nome}\n`;
        texto += `Escolha de ${grupo.min} até ${grupo.max}\n\n`;

        texto += opcoesAtivas
          .map(
            (o, i) =>
              `${i + 1} - ${o.nome}${o.preco > 0 ? " +R$ " + o.preco.toFixed(2) : ""}`
          )
          .join("\n");

        texto += `\n\nDigite os números separados por vírgula\n(Cancelar para sair)`;

        let resp = prompt(texto);
        if (resp === null) return;

        let selecionados = resp
          .split(",")
          .map(n => parseInt(n.trim()))
          .filter(n => !isNaN(n) && n >= 1 && n <= opcoesAtivas.length)
          .map(n => opcoesAtivas[n - 1]);

        if (selecionados.length < grupo.min) {
          alert(`Escolha pelo menos ${grupo.min} opção(ões)`);
          continue;
        }

        if (selecionados.length > grupo.max) {
          alert(`Escolha no máximo ${grupo.max} opção(ões)`);
          continue;
        }

        selecionados.forEach(o => {
          adicionais.push(o.nome);
          valorAdicionais += o.preco || 0;
        });

        break;
      }
    }

    escolhaVariacao = adicionais.join(", ");
    precoEscolhido += valorAdicionais;
  }

  // ==========================
  // QUANTIDADE
  // ==========================
  let qtd = prompt("Quantidade:");
  if (qtd === null) return;

  qtd = parseInt(qtd);
  if (isNaN(qtd) || qtd <= 0) return alert("Quantidade inválida!");

  let total = 0;

  // promoção SOMENTE para itens de 1.99
  if (Math.abs(precoEscolhido - 1.99) < 0.001 && qtd >= 3) {
    const gruposDe3 = Math.floor(qtd / 3);
    const resto = qtd % 3;

    total = (gruposDe3 * 4.99) + (resto * 1.99);
  } else {
    total = qtd * precoEscolhido;
  }


  carrinho.push({
    id: p.id,
    nome: p.nome,
    tipo: "und",
    qtd,
    preco: precoEscolhido,
    total,
    variacao: escolhaVariacao
  });

  salvarCarrinho();
  renderCarrinho();
}


// ==========================
// RENDERIZAR CARRINHO
// ==========================
function renderCarrinho() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  if (!carrinho.length) {
    lista.innerHTML = `<div style="color:#999;">Nenhum item adicionado.</div>`;
    atualizarResumo();
    return;
  }

  carrinho.forEach((item, i) => {
    lista.innerHTML += `
      <div class="item-card">
        <div class="item-name">
          ${item.nome}${item.variacao ? " — " + item.variacao : ""}
        </div>
        <div class="item-info">
          ${item.tipo === "kg" ? `${item.peso.toFixed(3)} kg` : `${item.qtd} un`}
          <strong>R$ ${item.total.toFixed(2)}</strong>
        </div>
        <button class="delete-btn" onclick="removerItem(${i})">Remover</button>
      </div>
    `;
  });

  atualizarResumo();
}

// ==========================
// REMOVER ITEM
// ==========================
function removerItem(i) {
  carrinho.splice(i, 1);
  salvarCarrinho();
  renderCarrinho();
}

// ==========================
// CALCULAR RESUMO
// ==========================
function atualizarResumo() {
  let subtotal = carrinho.reduce((acc, p) => acc + p.total, 0);

  const entrega = document.querySelector("input[name='modalRetirada']:checked")?.value || "Retirada";

  taxaEntrega = (entrega === "Entrega" && subtotal < 60) ? 4 : 0;

  let total = subtotal - descontoVal + taxaEntrega;
  if (total < 0) total = 0;

  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  document.getElementById("desconto").innerText = descontoVal.toFixed(2);
  document.getElementById("taxa").innerText = taxaEntrega.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);

  document.getElementById("m_subtotal").innerText = subtotal.toFixed(2);
  document.getElementById("m_desconto").innerText = descontoVal.toFixed(2);
  document.getElementById("m_taxa").innerText = taxaEntrega.toFixed(2);
  document.getElementById("m_total").innerText = total.toFixed(2);
}

// ==========================
// CAMPOS DE ENDEREÇO
// ==========================
document.querySelectorAll("input[name='modalRetirada']").forEach(r => {
  r.addEventListener("change", () => {
    const entrega = document.querySelector("input[name='modalRetirada']:checked").value;
    document.getElementById("m_endereco_box").style.display = entrega === "Entrega" ? "block" : "none";
    atualizarResumo();
  });
});

// ==========================
// APLICAR CUPOM
// ==========================
descontoVal = 0;

document.getElementById("m_aplicar_cupom").onclick = function () {
  const codigo = document.getElementById("m_cupom").value.trim().toUpperCase();

  if (!codigo) return alert("Digite um cupom!");
  if (!cupons[codigo]) return alert("Cupom inválido!");

  if (codigo === "BOASVINDAS" && localStorage.getItem("boasVindasUsado")) {
    return alert("O cupom BOASVINDAS só pode ser usado na primeira compra!");
  }

  let subtotal = carrinho.reduce((acc, p) => acc + p.total, 0);

  descontoVal = subtotal * cupons[codigo];

  const campoDesconto = document.getElementById("desconto_valor");
  if (campoDesconto) campoDesconto.textContent = descontoVal.toFixed(2);

  alert(`Cupom aplicado: ${(cupons[codigo] * 100).toFixed(0)}% OFF`);

  if (codigo === "BOASVINDAS") {
    localStorage.setItem("boasVindasUsado", "true");
  }

  atualizarResumo();
};

// ==========================
// MODAL
// ==========================
const modal = document.getElementById("modalFinalizar");

function abrirModal() {
  if (carrinho.length === 0) return alert("Adicione itens!");
  atualizarResumo();
  modal.style.display = "flex";
}
function fecharModal() { modal.style.display = "none"; }

document.getElementById("btnFinalizar").onclick = abrirModal;
document.getElementById("modalClose").onclick = fecharModal;
document.getElementById("m_cancelar").onclick = fecharModal;

window.onclick = e => { if (e.target === modal) fecharModal(); };

// ==========================
// ENVIAR WHATSAPP
// ==========================
document.getElementById("m_confirmar").onclick = () => {
  let formaEntrega = document.querySelector("input[name='modalRetirada']:checked")?.value || "Retirada";
  let pagamento = document.querySelector("input[name='modalPagamento']:checked")?.value || "Dinheiro";

  let txtEndereco = "";
  if (formaEntrega === "Entrega") {
    const rua = document.getElementById("m_rua").value.trim();
    const numero = document.getElementById("m_numero").value.trim();
    const bairro = document.getElementById("m_bairro").value.trim();
    const ref = document.getElementById("m_referencia").value.trim();
    if (!rua || !numero || !bairro) return alert("Preencha Rua, Número e Bairro!");
    txtEndereco = `\nEndereço:\nRua: ${rua}\nNúmero: ${numero}\nBairro: ${bairro}` + (ref ? `\nReferência: ${ref}` : "");
  }

  const itens = carrinho.map(i =>
    i.tipo === "kg"
      ? `${i.nome}${i.variacao ? " — " + i.variacao : ""} — ${i.peso.toFixed(3)} kg — R$ ${i.total.toFixed(2)}`
      : `${i.nome}${i.variacao ? " — " + i.variacao : ""} — ${i.qtd} un — R$ ${i.total.toFixed(2)}`
  ).join("\n");

  const totalFinal = (carrinho.reduce((a, b) => a + b.total, 0) - descontoVal + taxaEntrega).toFixed(2);
  atualizarResumo();

  const msg = `PEDIDO VAREJÃO J. ANDRADE\n\n*${itens}*\n\nDesconto: R$ ${descontoVal.toFixed(2)}\nTaxa: R$ ${taxaEntrega.toFixed(2)}\n*Total: R$ ${totalFinal}*\n\nPagamento: ${pagamento}\nEntrega: ${formaEntrega}${txtEndereco}`;

  window.open(`https://wa.me/5581996864080?text=${encodeURIComponent(msg)}`, "_blank");

  carrinho = [];
  salvarCarrinho();
  renderCarrinho();
  fecharModal();
};

function validarGrupo(grupo, selecionados) {
  if (selecionados.length < grupo.min) {
    return `Escolha no mínimo ${grupo.min} opção(ões) em ${grupo.nome}`;
  }
  if (selecionados.length > grupo.max) {
    return `Escolha no máximo ${grupo.max} opção(ões) em ${grupo.nome}`;
  }
  return true;
}


// ==========================
// LIMPAR CARRINHO
// ==========================
document.getElementById("btnLimpar").onclick = () => {
  carrinho = [];
  salvarCarrinho();
  renderCarrinho();
};

renderCarrinho();
