export const getChartWidth = () => {
  if (screen.height <= 800) { // 400 around mobile phone width
    return 390
  } else if (screen.height <= 900 ) { // laptops and small screens
    return 800
  } else if (screen.height <= 1100) { // large monitors and displays
    return 1250
  }
}

export const getChartHeight = () => {
  if (screen.height <= 800) {
    return 150
  } else if (screen.height <= 900 ) {
    return 300
  } else if (screen.height <= 1100) {
    return 365
  }
}