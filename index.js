var matrix=[[1,2,3],[4,5,6],[7,8,9]];
var chanceCross=true;
var curr=1;

function ch(l,teller,cross,crossDir)
{
        if(cross===1)
        {
                if(crossDir==='ltr')
                {
                        if(matrix[0][0]===matrix[1][1] && matrix[1][1]===matrix[2][2])
                        {
                                return true;
                        }else
                        {
                                return false;
                        }
                }else
                {
                        if(matrix[0][2]===matrix[1][1] && matrix[2][0]==matrix[1][1])
                        {
                                return true;
                        }else
                        {
                                return false;
                        }
                }
        }
        if(teller==='r')
        {
                if(matrix[l][0]===matrix[l][1] && matrix[l][1]===matrix[l][2])
                {
                        return true;
                }else
                {
                        return false;
                }
        }
        if(teller==='c')
        {
                if(matrix[0][l]===matrix[1][l] && matrix[1][l]===matrix[2][l])
                {
                        return true;
                }else
                {
                        return false;
                }
        }
}

const check_matrix=()=>{

        if(ch(0,'r',0,"") || ch(1,'r',0,"") || ch(2,'r',0,"") || ch(0,'c',0,"") || ch(1,'c',0,"") || ch(2,'c',0,"") || ch(-1,'y',1,'ltr') || ch(-1,'y',1,'rtl'))
        {
                return true;
        }else
        {
                return false;
        }
};

$('.block').click(function(){

       var temp=$(this).attr('title').split(' ');
       temp[0]=Number(temp[0]);
       temp[1]=Number(temp[1]);
       if(chanceCross===true)
       {
               $(this).text('X');
               matrix[temp[0]][temp[1]]='X';
               chanceCross=false;
               curr=1;

       }else
       {
               $(this).text('O');
               matrix[temp[0]][temp[1]]='O';
               chanceCross=true;
               curr=2;
       }

       if(check_matrix())
       {
                if(curr==1)
                {
                        var winner=$('#p1').val();
                        $('.result').text(`${winner} Wins`);
                }else
                {
                        var winner=$('#p2').val();
                        $('.result').text(`${winner} Wins`);
                }
       }
        
});

$('.btn').click(function(){

        matrix=[[1,2,3],[4,5,6],[7,8,9]];
        $('.block').each(function(){
                $(this).text('');
        })
        chanceCross=true;
        $('.result').text('Click the blocks to play the game');
        $('#p1').val('');
        $('#p2').val('');
});