function aj(currentPgNum){
    $.ajax({
        type:"POST",
        url:"/data/blogContent.json",
        datatype:"json",
        success:function(data){
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
    }) ;

}

