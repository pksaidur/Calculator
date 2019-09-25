
       function x1(val){
        form.displayResult.value=form.displayResult.value+val;
            }
        function equaL(){
              var  qq=eval(document.getElementById('dis1').value);
                if(qq=='' || qq==null){
                    document.getElementById('dis1').value="Invalid input";
            }
            else{ 
                 document.getElementById('dis1').value=qq.toFixed(2);
            }
           }
        function cleaN(){
          document.getElementById('dis1').value='';
         }
        function dollaR(){
            var dol=eval((document.getElementById('dis1').value)*84.42);
            document.getElementById('dis1').value=dol;
        }
        function exiT() {
            var x = document.getElementById("forM");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }