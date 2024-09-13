const lupa_pesquisa = document.getElementById("navegacao");
let nav_amostra = false;

function pesquisar()
{
    if (!nav_amostra)
    {
        lupa_pesquisa.style.display = "flex";
        nav_amostra = true;
    }
    else
    {
        lupa_pesquisa.style.display = "none";
        nav_amostra = false;
    }
}

function nav_selecionado() 
{
    document.addEventListener("click", );
}