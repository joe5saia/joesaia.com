//! Independent safeguards remove a fraction of the defects that remain.
//! Values are percentages; disabled layers are passed as zero.
fn remaining_defects(effectiveness: &[f64]) -> f64 {
    effectiveness.iter().fold(100.0, |remaining, &effect| {
        let bounded = if effect.is_finite() {
            effect.clamp(0.0, 100.0)
        } else {
            0.0
        };
        remaining * (1.0 - bounded / 100.0)
    })
}

// Scalar ABI: no allocator, JS glue generator, or shared mutable state required.
#[no_mangle]
pub extern "C" fn defect_rate(
    coding: f64,
    review: f64,
    manual: f64,
    unit: f64,
    integration: f64,
    e2e: f64,
    property: f64,
    fuzzing: f64,
    qa: f64,
    dogfooding: f64,
    demos: f64,
    observability: f64,
    specification: f64,
) -> f64 {
    remaining_defects(&[
        coding,
        review,
        manual,
        unit,
        integration,
        e2e,
        property,
        fuzzing,
        qa,
        dogfooding,
        demos,
        observability,
        specification,
    ])
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn article_defaults() {
        assert!((remaining_defects(&[80.0, 25.0, 25.0, 25.0, 25.0]) - 6.328125).abs() < 1e-10);
        let mut layered = vec![25.0; 9];
        layered.push(50.0);
        assert!((remaining_defects(&layered) - 3.7542343139648438).abs() < 1e-10);
    }
    #[test]
    fn boundaries_and_invalid_inputs() {
        assert_eq!(remaining_defects(&[0.0; 13]), 100.0);
        assert_eq!(remaining_defects(&[100.0]), 0.0);
        assert_eq!(remaining_defects(&[-10.0, f64::NAN, f64::INFINITY]), 100.0);
        assert_eq!(remaining_defects(&[110.0]), 0.0);
        assert_eq!(remaining_defects(&[50.0, 50.0]), 25.0);
    }
}
