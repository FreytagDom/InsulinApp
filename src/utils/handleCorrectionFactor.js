export default function handelCorretion(bloodsugar, userCorrectionFactorToDisplay) {
    
    let chekedCorrection;
    if (bloodsugar < 100) { chekedCorrection  = (0);}
    else { chekedCorrection =  (userCorrectionFactorToDisplay.props.value); }
    
     return chekedCorrection;
}