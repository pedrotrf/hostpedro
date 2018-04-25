function Calcular() 
{
      var   planejadas = parseInt(document.getElementById("planejadas").value,10),
            produzidas = parseInt(document.getElementById("produzidas").value,10),
            boas = parseInt(document.getElementById("boas").value,10);
            eficiencia, diferenca, treco, tempo;
      
      eficiencia = (produzidas*100)/planejadas;
      diferenca = produzidas - planejadas;
      treco = (produzidas-boas)/produzidas*100 ;
      tempo = produzidas*60/planejadas-60;
      
      document.getElementById('before').style.display='none';
      document.getElementById('after').style.display='block';
      document.getElementById('btn_nov').style.display='block';
      document.getElementById('btn_calc').style.display='none';
      
      document.getElementById('eficiencia').innerHTML = eficiencia+" %";
      document.getElementById('diferenca').innerHTML = diferenca+" peças";
      document.getElementById('treco').innerHTML = treco+" %";
      document.getElementById('tempo').innerHTML = tempo+" min";
}

function C_Novamente()
{
      document.getElementById('planejadas').value = "";
      document.getElementById('produzidas').value = "";
      document.getElementById('boas').value = "";
      location.reload();
}