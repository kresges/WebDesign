var repl = null
var TOKEN   = {}

//This is executed every time the page loads in order 
//to ensure that a current token is available.
$.get('/token',function(data){
    TOKEN = { time_created: data[0],
              msg_mac: data[1]
            }
    repl = new ReplitClient('api.repl.it', '80', 'python', TOKEN);
    });

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