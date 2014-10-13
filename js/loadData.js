function aj(currentPgNum){

            var data = '{blog:[{page:[{src:"pic/3.jpg",title:"A body on the beach",author:"by Moutrain",t2:"United Nations",time:"2014-10-11 10:30",timeStr:"- Various activeies are organized on and around",disNum:"9",content:"The mountain was covered by trees and the most interesting thing is that it has a lot of monkeys. The monkeys are not at all afraid of human, and they may even come over and take whatever thing they are interested on you. Any food, or toys or even umbrella are targets of the monkeys."},{src:"pic/4.jpg",title:"What do people do?",author:"by Jim",t2:"Desert lives",time:"2014-10-12 14:30",timeStr:"- Various activeies are organized on and around",disNum:"2",content:"The mountain was covered by trees and the most interesting thing is that it has a lot of monkeys. The monkeys are not at all afraid of human, and they may even come over and take whatever thing they are interested on you. Any food, or toys or even umbrella are targets of the monkeys."}]},{page:[{src:"pic/0.jpg",title:"A nice place where you should go",author:"by Jack",t2:"Night Sky",time:"2014-10-12 11:30",timeStr:"- Various activeies are organized on and around",disNum:"9",content:"The mountain was covered by trees and the most interesting thing is that it has a lot of monkeys. The monkeys are not at all afraid of human, and they may even come over and take whatever thing they are interested on you. Any food, or toys or even umbrella are targets of the monkeys."},{src:"pic/2.jpg",title:"Around the sky",author:"by Ca",t2:"Sea under Sky",time:"2014-10-12 14:30",timeStr:"- Various activeies are organized on and around",disNum:"9",content:"The mountain was covered by trees and the most interesting thing is that it has a lot of monkeys. The monkeys are not at all afraid of human, and they may even come over and take whatever thing they are interested on you. Any food, or toys or even umbrella are targets of the monkeys."}]},{page:[{src:"pic/0.jpg",title:"A nice place where you should go",author:"by Jack",t2:"Night Sky",time:"2014-10-12 11:30",timeStr:"- Various activeies are organized on and around",disNum:"9",content:"The mountain was covered by trees and the most interesting thing is that it has a lot of monkeys. The monkeys are not at all afraid of human, and they may even come over and take whatever thing they are interested on you. Any food, or toys or even umbrella are targets of the monkeys."},{src:"pic/4.jpg",title:"Around the sky",author:"by Ca",t2:"Sea under Sky",time:"2014-10-12 14:30",timeStr:"- Various activeies are organized on and around",disNum:"9",content:"The mountain was covered by trees and the most interesting thing is that it has a lot of monkeys. The monkeys are not at all afraid of human, and they may even come over and take whatever thing they are interested on you. Any food, or toys or even umbrella are targets of the monkeys."}]}]}';

            var imgObj = $("img").not($(".discuss")),titleObj = $("li.st"),authorObj = $("li.fone"),h2Obj = $("h2"),contentObj = $("p.fonn1");
            var pbTime = $("span.time"),disNum = $("li.disNum"),timeStr = $("span.timeStr");
            var titleMax=20,contentMaxwd=250;
            var dataArr=eval("("+data+")");
            $("img.discuss").attr("src", "pic/p.jpg");
            $.each(dataArr.blog, function(i,pg_item){

                if(i==(currentPgNum-1)){
                    $.each(pg_item.page, function(j,item){
//                        alert(i+","+j+","+item.name+",pg:"+currentPgNum+","+imgObj[j].src);
                        imgObj[j].src = item.src;
                        titleObj[j].innerText = item.title;
                        if(titleObj[j].innerText.length>titleMax){
                            titleObj[j].innerText =titleObj[j].innerText.substring(0,titleMax)+'...';
                        }
                        authorObj[j].innerText = item.author;
                        h2Obj[j].innerText = item.t2;
                        contentObj[j].innerText = item.content;
                        if(contentObj[j].innerText.length>contentMaxwd){
                            contentObj[j].innerText =contentObj[j].innerText.substring(0,contentMaxwd)+'...';
                        }
                        disNum[j].innerText = item.disNum;


                        var pbTimeV = item.time;
                        var difTime=getDiff(pbTimeV);
                        var h=parseInt(difTime);


                        if(h>24){
                            pbTime[j].innerText = parseInt(h/24)+" day ago";
                        }else{

                            pbTime[j].innerText = h+" hours ago";
                        }

                        timeStr[j].innerText = item.timeStr;


                    });
                }



            });



}

