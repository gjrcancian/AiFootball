<?php

for($i=0; $i< 9; $i++ ){


    for($j=0;$j< 5; $j++ ){

        ?>
        <div class='posicao_campo' id='<?php echo "$i$j";?>'>
            <img src='assets/img/jogador_ia.gif' id='jogador_<?php echo "$i$j";?>' style='width:50px;display:none;'>
            <img src='assets/img/comemorando.gif' id='comemorando_<?php echo "$i$j";?>' style='width:150px;display:none;z-index:1;margin-left:-25px;'>
            <img src='assets/img/rival_ia.gif' id='rival_<?php echo "$i$j";?>' style='width:50px;display:none;  transform: scaleX(-1);'>
            <img src='assets/img/derrotado.gif' id='derrotado_<?php echo "$i$j";?>' style='width:200px;display:none;  transform: scaleX(-1);'>
          
            <?php if($i == 3 ){?>
                <img src='assets/img/chave_gol.gif' id='chave_gol_<?php echo "$i$j";?>' style='width:50px;  display:none;'>

                <?php }?>

          
            <?php if($j == 2 and $i== 8 ){?>

            <img src='assets/img/goleiro.gif' id='goleiro_<?php echo "$i$j";?>' style='width:100px;  transform: scaleX(-1);'>
            <img src='assets/img/goal.gif' id='gol_<?php echo "$i$j";?>' style='width:200px;  display:none;z-index:2;margin-left:75px;'>
           <?php }?>
            <img src='assets/img/boom.gif' id='boom_<?php echo "$i$j";?>' style='width:200px;display:none;'>
        </div>
        <?php
    }
}