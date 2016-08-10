let duration = 600;

export default function(){

  this.transition(
    this.toValue(true),
    this.use('crossFade', {duration}),
    this.reverse('toLeft', {duration})
  );
}
