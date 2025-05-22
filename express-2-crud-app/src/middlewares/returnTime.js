export default function requestTimeLogger(request, response, next) {
  console.log(new Date().getTime());
  next();
}
