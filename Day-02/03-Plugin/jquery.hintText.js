$.fn.hint = function(){
	$(this).filter("[hintText"]).each(function(){
				var $this = $(this);
				var hintText = $this.attr("hintText");
				$this.val(hintText).addClass('hint');
				$this.focus(function(){
					if($this.val() === hintText){
						$this.val('').removeClass('hint');
					}
				}).blur(function(){
					if($this.val() === ''){
						$this.val(hintText).addClass('hint');
					}
				});
			});
};