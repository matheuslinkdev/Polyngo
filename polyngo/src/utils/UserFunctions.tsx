export function setProgressMessage(progress: number) {
  let progressMessage;
  if (progress <= 25) {
    progressMessage = "Ainda falta bastante, vamos lá !";
  } else if (progress >= 26 && progress <= 45) {
    progressMessage = "Você já está quase na metade !";
  } else if (progress >= 46 && progress <= 55) {
    progressMessage = "Você já está na metade da formação !";
  } else if (progress >= 56 && progress <= 75) {
    progressMessage = "Falta pouco para você terminar !";
  } else if (progress >= 76 && progress < 100) {
    progressMessage = "Falta pouco para você terminar !";
  } else {
    progressMessage =
      "Parabéns, você concluiu a formação !! Que orgulho de você !";
  }

  return progressMessage;
}
