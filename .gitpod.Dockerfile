FROM gitpod/workspace-full
                    
USER gitpod

RUN sudo apt-get -q update && \
    sudo apt-get install -yq build-essential clang-11 && \
    sudo rm -rf /var/lib/apt/lists/*

RUN sudo mkdir /opt/emsdk && sudo chown gitpod /opt/emsdk && \
    git clone https://github.com/emscripten-core/emsdk.git /opt/emsdk && \
    cd /opt/emsdk && \
    ./emsdk install latest && \
    ./emsdk activate latest
