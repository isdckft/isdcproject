import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-tensor-flow-basic',
  templateUrl: './tensor-flow-basic.component.html',
  styleUrls: ['./tensor-flow-basic.component.css']
})
export class TensorFlowBasicComponent implements OnInit {
  // Define a model for linear regression.
  
  model = tf.sequential();
  rank;
  tensorA;
  tensorB;
  tensor2D; 
  tensorZeros;
  tensorAdd;
  pred;


  a = tf.scalar(2);
  b = tf.scalar(4);
  c = tf.scalar(8);
  
  constructor() { }
  
  ngOnInit() {
  }

 runLinRegDemo(){
    this.model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // Prepare the model for training: Specify the loss and the optimizer.
    this.model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    // Generate some synthetic data for training.
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    // Train the model using the data.
    this.model.fit(xs, ys, {epochs: 10}).then(() => {
      // Use the model to do inference on a data point the model hasn't seen before:
      this.rank = this.model.predict(tf.tensor2d([5], [1, 1]));
    });
 }

 displayTensors(){

    // 2x3 Tensor
    const shape = [2, 3]; // 2 rows, 3 columns
    this.tensorA = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
    

    // The shape can also be inferred:
    this.tensorB = tf.tensor([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
    this.tensor2D= tf.tensor2d([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
    this.tensorZeros = tf.zeros([3, 5]);

    const e = tf.tensor2d([[1.0, 2.0], [3.0, 4.0]]);
    const f = tf.tensor2d([[5.0, 6.0], [7.0, 8.0]]);

    const e_plus_f = e.add(f);
    this.tensorAdd = e_plus_f;


    // Predict output for input of 2
    const result = this.predict(2);
    this.pred= result;

  }

// Define function
  predict(input) {
    // y = a * x ^ 2 + b * x + c
    // More on tf.tidy in the next section
    return tf.tidy(() => {
      const x = tf.scalar(input);

      const ax2 = this.a.mul(x.square());
      const bx = this.b.mul(x);
      const y = ax2.add(bx).add(this.c);

      return y;
  });

  }

}
