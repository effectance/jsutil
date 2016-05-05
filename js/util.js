(function(_this) {

    /***
		 * 主にdebug用ユーティリティ
		 */

		//console.logのエイリアス
		_this.log = function log() {
				console.log.apply(console, arguments);
		}

		//console.dirのエイリアス
		_this.dir = function dir() {
				console.dir.apply(console, arguments);
		}

		//document.writelnのエイリアス
		_this.echo = function echo() {
				document.writeln.apply(document, arguments);
		}

		//document.writeのエイリアス
		_this.write = function write() {
				document.write.apply(document, arguments);
		}

		//値のfalse判定をする
		_this.printFalse = function(bool) {
				var res = (typeof b === "string")? '"' + b + '"': b;
				write("[");
				write(res);
				write("] (" + (typeof b) + ") is ");
				if(b) {
						echo('<b class="true">true</b>');
				}else {
						echo('<b class="false">false</b>');
				}
		}

}(window));
