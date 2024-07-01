import Replicate from "replicate";
const replicate = new Replicate({auth: process.env.REPLICATE_API_KEY});
//Consigue tu API_KEY gratis (para pruebas) en: https://replicate.com

const model_stdif_3 = "stability-ai/stable-diffusion-3";
const INPUT_ST3 = {
    client: model_stdif_3,
    cfg: 4.5,
    seed: 1895223100,
    prompt: "an epic logo for \"STABLE DIFFUSION 3\", depicting a space wizard in the style of a nebula background with blue and purple neon text on a white glowing background floating over a mountain range",
    aspect_ratio: "16:9",
    output_format: "webp",
    output_quality: 79,
    negative_prompt: "ugly, distorted, watermark",
};
const model_stabai_adxl = "stability-ai/sdxl:7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc";
const INPUT_SAI_ADXL = {
    client: model_stabai_adxl,
    width: 768,
    height: 768,
    prompt: "An astronaut riding a rainbow unicorn, cinematic, dramatic",
    refine: "expert_ensemble_refiner",
    scheduler: "K_EULER",
    lora_scale: 0.6,
    num_outputs: 1,
    guidance_scale: 7.5,
    apply_watermark: false,
    high_noise_frac: 0.8,
    negative_prompt: "",
    prompt_strength: 0.8,
    num_inference_steps: 25,
};
const model_suno = "suno-ai/bark:b76242b40d67c76ab6742e987628a2a9ac019e11d56ab96c4e91ce03b79b2787";
const INPUT_SUNO = {
    client: model_suno,
    prompt: "La guerra de un día, de los 6 días, de los mil días... El norte contra el sur, el este contra el oeste. La primera, la segunda, la tercera... Innumerables guerras por la religión y las creencias. Las guerras por el combustible, las guerras por el agua, la guerra nuclear de las 3 naciones. La batalla de las ciudades en auge. Y ahora, queridos; La guerra del desierto de los 40 días.",
    text_temp: 0.7,
    output_full: false,
    waveform_temp: 0.7,
    history_prompt: "es_speaker_6",
}
const model_metaMusic = "meta/musicgen:671ac645ce5e552cc63a54a2bbff63fcf798043055d2dac5fc9e36a837eedcfb";
const INPUT_MM = {
    client: model_metaMusic,
    prompt: "Create a 10-second loop of techno-Viking music that builds tension. The music should feature deep, pulsating basslines, rhythmic electronic drums, and haunting, atmospheric synthesizers. Incorporate traditional Viking instruments like the tagelharpa and war horns subtly in the background. The piece should feel intense and suspenseful, perfect for looping seamlessly.",
    model_version: "stereo-large",
    output_format: "mp3",
    duration: 10,
    normalization_strategy: "peak",
};

let model = model_metaMusic;
let input = INPUT_MM;

if (input === undefined) {
    input = INPUT_ST3; 
} else {
    input = input
};

console.log("...Running the model: " + model);
console.log("processing input...")
const output = await replicate.run(model, { input });
console.log("output ----------------------------------------------------------------------------------")
console.log(output);
console.log("-----------------------------------------------------------------------------------------")

