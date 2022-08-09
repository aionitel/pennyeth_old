export const getChartWidth = () => {
  if (typeof window !== 'undefined' && screen.height <= 899) { // 400 around mobile phone width
    return 390
  } else if (typeof window !== 'undefined' && screen.height <= 900 ) { // laptops and small screens
    return 800
  } else if (typeof window !== 'undefined' && screen.height <= 1100) { // large monitors and displays
    return 1500
  }
}

export const getChartHeight = () => {
  if (typeof window !== 'undefined' && screen.height <= 899) {
    return 150
  } else if (typeof window !== 'undefined' && screen.height <= 900 ) {
    return 300
  } else if (typeof window !== 'undefined' && screen.height <= 1100) {
    return 340
  }
}