function add(politicoId) {
  $.ajax({
        url:"https://zlvtn47i82.execute-api.us-east-1.amazonaws.com/dev/politicos",
        dataType:'json',
        type: 'get',
        headers: {
         'Content-Type': 'text/plain',
        },
        success:function(response){
          console.log(response,'RESPONSE');
        }
    });
}
