//May expire every five days, consider writing token generator.
TOKEN   = { time_created: 1477556963000,
  msg_mac: '0noZfAvFe63IpJj6kX9pXChrE2JE299vPJpBUK5e5vI=' }

var repl = new ReplitClient('api.repl.it', '80', 'python', TOKEN);

$('#run').click(function(){
	console.log("Run: /execute");

	repl.connect().then(
    function() {
        $('#run').toggleClass('btn-success');
        console.log("start()")
        start();
    },
    function() {
        $('#run').toggleClass('btn-danger');
    }
);
    //$('#constatus').text("Finished");
  });

function start(){
    var string = ""
    //console.log(code);
    //console.log($('#editor'));
    //var code = "" + $('#editor').val()
    var code = editor.getValue()
    repl.evaluate(
            //$('#code').value,
            code,
             {    
                stdout: function(str) {
                    string += str
                    //console.log(string);
                    $('#output').html("output: " + string);
                }
             }
        ).then(
            function(result) {
                console.log(result.error || result.data)
                $('#result').html("result: " + (result.error || result.data));
            },
            function(err) {
                console.log(err);
                $('#run').toggleClass('.btn-warning')
            }
        );
}

//Could be used in the future as example of how to author get requests to server using jquery
//$.get('/execute',function(data){
//  console.log(data);
//});