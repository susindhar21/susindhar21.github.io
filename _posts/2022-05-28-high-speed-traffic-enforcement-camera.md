---
layout: post
category: project
title: High Speed Traffic Enforcement Camera
thumbnail: /assets/img/high-speed-image-1.jpg
excerpt: This was the project for the course 'Microprocessors and Interfacing', where I attempted to simulate a high speed traffic enforcement camera using multiple cheap CCTV cameras and the power of image recognition. This project would be revolutionary for the seamless transition to use of this technology in low resource areas in the country.<br><br>
---

It was in the Winter Semester, 2021-22 when we were introduced to the course, Microprocessors. I had a relatively proper understanding of the Computer Architecture, and my professor re-iterated that this course would help us understand computers deeper, and that there is a world beyond the desktops and laptops that accompanies us in our lives, in the form of embedded computers. It was at a time when the weather was hardly winter-like, and when I happened to stumble on to a news article reporting that deaths due to traffic accidents was at an all-time high.
<br><br>

#### Goal of the Project
<br>

The goal of the project is to determine the speed of a vehicle by using the time elapsed and distance travelled from the starting point to the end point. The architecture of the proposed solution contains 4 stages:

* Detection of the vehicle
* Track the vehicle and obtain the speed of the image
* Obtain image captures of the number plate of the vehicles over speed limit.
* Processing of the images captured.

The start and the end coordinates are initially set. Then a video of the moving vehicle is obtained using the CCTV camera setup. The distance between the start and the end point is approximated. This will be used as the distance for estimating the speed in the speed calculation stage. The video frames are collected and processed. Using the video frames, image frames would be extracted using an appropriate software. These images generated would then be enhanced again and processed.
<br><br>

#### System Architecture
<br>

The architecture consists of the following:

1. **Camera setup:** Two CCTV cameras are set up at a distance from each other to cover the area of interest.
2. **Object detection:** Each camera captures video footage and feeds it into an object detection system. The system identifies objects within the video frames and extracts features such as position, size, and orientation.
3. **Object tracking:** The object detection system tracks the identified objects over time and records their positions at different time intervals. To track the objects across cameras, we can use a multi-camera tracking algorithm that fuses the data from both cameras and produces a single track for each object.
4. **Speed calculation:** Once we have the positions of the objects at different time intervals, we can calculate their speed by dividing the distance they covered by the time elapsed between the two intervals.
5. **Output visualization:** The speed data can be displayed in a graphical format that shows the speed of each object over time.
6. **Alert system:** An alert system can be set up to notify the user when the speed of an object exceeds a predefined threshold. This can be useful in scenarios where speeding vehicles or objects pose a safety risk.

To implement this architecture, we can use a combination of computer vision and ma1 chine learning techniques such as object detection, tracking, and multicamera fusion. Open-source libraries such as OpenCV, TensorFlow, and PyTorch can be used to develop the object detection and tracking systems. The output data can be stored in a database or cloud storage for further analysis or visualization.

<br>
<figure style="display: block; margin-left: auto; margin-right: auto; width: 70%; text-align: justify; font-size: 80%">
<img src="/assets/img/high-speed-camera-architecture.png" alt="Robert Waterson" width="100%"/>
<figcaption><i>Architecture Diagram of the camera system.</i></figcaption>
</figure>
<br>

#### Implementation
<br>

The developed CCTV was tested in a simulated environment. We have conducted extensive testing in simulated environments to evaluate the accuracy and efficiency of the system. The system was able to detect the speed of a dummy vehicle and also capture the name plate accurately. All this was done using by CCTV systems, so our research also shows that this system can easily be integrated to existing CCTV cameras on roads, thus making it a cost-effective solution for improving road safety and traffic management.

<br>
<figure style="display: block; margin-left: auto; margin-right: auto; width: 70%; text-align: justify; font-size: 80%">
<img src="/assets/img/high-speed-camera-testing-1.png" alt="Camera testing" width="100%"/>
</figure>
<br>

We then used Haar Cascade, a popular object detection algorithm based on Haar Wavelets, to isolate the vehicles in these high definiton images captured and mark them.

<br>
<figure style="display: block; margin-left: auto; margin-right: auto; width: 70%; text-align: justify; font-size: 80%">
<img src="/assets/img/high-speed-camera-testing-2.png" alt="Camera testing with Haar Wavelet" width="100%"/>
</figure>
<br>

We were able to recognize the license plates of the vehicle using text recognition packages on python, like pytesseract to extract license plates in text. For this to work, we enhanced the image to detect both printed/handwritten text.

<br>
<figure style="display: block; margin-left: auto; margin-right: auto; width: 70%; text-align: justify; font-size: 80%">
<img src="/assets/img/high-speed-camera-testing-5.png" alt="Camera testing with Haar Wavelet" width="100%"/>
<figcaption><i>Edge detection to identify irregular fonts of text in license plates.</i></figcaption>
</figure>
<br>

The readings calculated are updated in a log, to maintain the history of unique vehicles crossing an area.

<br>
<figure style="display: block; margin-left: auto; margin-right: auto; width: 70%; text-align: justify; font-size: 80%">
<img src="/assets/img/high-speed-camera-testing-3.png" alt="Log records" width="100%"/>
</figure>
<br>

<br>
<figure style="display: block; margin-left: auto; margin-right: auto; width: 70%; text-align: justify; font-size: 80%">
<img src="/assets/img/high-speed-camera-testing-4.png" alt="Camera testing with Haar Wavelet" width="100%"/>
</figure>
<br>

#### Conclusion and Final Remarks
<br>

The system is designed to automatically detect speeding vehicles and record their license plate numbers, without the need for human intervention. The system uses advanced image processing algorithms and machine learning techniques to accurately identify vehicles exceeding the speed limit, making it highly efficient and effective in reducing accidents caused by over-speeding. The high-speed traffic enforcement camera system has several benefits, including serving as a deterrent for drivers who may otherwise speed, providing evidence for law enforcement to take action against dangerous drivers, and collecting valuable data on traffic flow and speed patterns that can be used to optimize traffic management, reduce congestion, and make driving more efficient.

This was an insightful experience for me (and my project partner) to explore interfacing of different devices, and overall creating a hardware setup. We faced numerous challenges, logistic and logical errors in the process, but overcoming that was more enlightening for us as students. Shoutout to Shruthi S, my best friend and partner for this project, for being the best teammate! :D

<br>
