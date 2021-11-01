$(document).ready(function(){
  //scroll to top show
  $(document).scroll(function(){
    if ($(this).scrollTop() > 400) {
        $('.go-top').fadeIn();
    } else {
        $('.go-top').fadeOut();
    }
  });
  //scroll to top action
  $('.go-top').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollTop: 0 }, 'slow');
          return false;
      });
  });

  $('.icon-arrow-down').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollTop: 800 }, 'slow');
          return false;
      });
  });


  // Horáios de funcionamento
  function verificaHorario(){
    var aberto = false;

    var hoje = new Date();

    var dia_semana = hoje.getDay();

    const Sunday = 0;
    const Monday = 1;
    const Tuesday = 2;
    const Wednesday = 3;
    const Thursday = 4;
    const Friday = 5;
    const Saturday = 6;

    var hora_atual = hoje.getHours()+":"+hoje.getMinutes()+":"+hoje.getSeconds();

    var mes = String(hoje.getMonth()+1);

    if(mes.length == 1){
      mes = '0'+mes;
    }

    //var dia_atual = hoje.getDate()+"/"+mes+"/"+hoje.getFullYear();
    var dia_atual = hoje.getFullYear()+"-"+mes+"-"+hoje.getDate();

    var horario_carnaval = Date.parse(dia_atual+'T'+hora_atual) <= Date.parse('2021-11-03T00:00:00')

    if(dia_semana == Sunday){
      if(horario_carnaval){
       if(Date.parse('01/01/2011 '+hora_atual) >= Date.parse('01/01/2011 11:30:00') && Date.parse('01/01/2011 '+hora_atual) <= Date.parse('01/01/2011 23:00:00')){
         aberto = true;
       }
      }else{
        if(Date.parse('01/01/2011 '+hora_atual) >= Date.parse('01/01/2011 11:30:00') && Date.parse('01/01/2011 '+hora_atual) <= Date.parse('01/01/2011 16:00:00')){
          aberto = true;
       }
      }
    }

    if(dia_semana == Monday){
      if(Date.parse('01/01/2011 '+hora_atual) >= Date.parse('01/01/2011 11:30:00') && Date.parse('01/01/2011 '+hora_atual) <= Date.parse('01/01/2011 16:00:00')){
      	aberto = true;
      }
      if(horario_carnaval){
        if(Date.parse('01/01/2011 '+hora_atual) >= Date.parse('01/01/2011 11:30:00') && Date.parse('01/01/2011 '+hora_atual) <= Date.parse('01/01/2011 23:00:00')){
          aberto = true;
        }
      }else{
        aberto = false;
      }
    }

    if(dia_semana == Tuesday){
      if(horario_carnaval){
        if(Date.parse('01/01/2011 '+hora_atual) >= Date.parse('01/01/2011 11:30:00') && Date.parse('01/01/2011 '+hora_atual) <= Date.parse('01/01/2011 17:30:00')){
          aberto = true;
        }
      } else {
        if(Date.parse('01/01/2011 '+hora_atual) >= Date.parse('01/01/2011 11:30:00') && Date.parse('01/01/2011 '+hora_atual) <= Date.parse('01/01/2011 23:00:00')){
          aberto = true;
        }
      }
    }

    if(dia_semana == Wednesday){
      if(horario_carnaval){
        aberto = false;
      } else {
        if(Date.parse('01/01/2011 '+hora_atual) >= Date.parse('01/01/2011 11:30:00') && Date.parse('01/01/2011 '+hora_atual) <= Date.parse('01/01/2011 23:00:00')){
          aberto = true;
        }
      }
    }

    if(dia_semana == Thursday){
      if(Date.parse('01/01/2011 '+hora_atual) >= Date.parse('01/01/2011 11:30:00') && Date.parse('01/01/2011 '+hora_atual) <= Date.parse('01/01/2011 23:00:00')){
        aberto = true;
      }
    }

    if(dia_semana == Friday){
      if(Date.parse('01/01/2011 '+hora_atual) >= Date.parse('01/01/2011 11:30:00') && Date.parse('01/01/2011 '+hora_atual) <= Date.parse('01/01/2011 23:00:00')){
        aberto = true;
      }
    }

    if(dia_semana == Saturday){
      if(Date.parse('01/01/2011 '+hora_atual) >= Date.parse('01/01/2011 11:30:00') && Date.parse('01/01/2011 '+hora_atual) <= Date.parse('01/01/2011 23:00:00')){
        aberto = true;
      }
    }

    if(aberto){
      $('#aberto_fechado').html('Abertos hoje <br> até às 23:00');
      $('#aberto_fechado').css('color', 'black');
    }else{
      $('#aberto_fechado').html('Estamos <br> Fechados <br> <a href="/#horarios"> Ver horários </a>');
      $('#aberto_fechado').css('color', 'red');
    }
  }
  verificaHorario();
});//wrapper end
