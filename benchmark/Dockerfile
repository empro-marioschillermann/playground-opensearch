FROM python:3.11

RUN apt-get update

RUN apt-get -y install neovim

RUN apt-get -y install sudo && \
    adduser --disabled-password --gecos '' empro && \
    adduser empro sudo && \
    echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

USER empro
WORKDIR /home/empro
RUN python3 -m pip install opensearch-benchmark && \
    echo 'export PATH=$PATH:/home/empro/.local/bin' >> ~/.bashrc
COPY workloads /home/empro/workloads

CMD ["sleep", "infinity"]