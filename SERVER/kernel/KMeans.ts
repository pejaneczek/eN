export class KMeans {

    data: Number[]
    means: any // TODO interfejs + typ
    assignments: any // TODO interfejs + typ
    dataExtremes: any // TODO interfejs + typ
    dataRange: any // TODO interfejs + typ

    constructor(data: Number[]) {
        this.data = data
    }

    /**
     * Funkcja pobierająca zakresy
     */
    public getRanges = (extremes: DoubleRange[]): Number[] => {
        let ranges: Number[] = []

        for (let dimension in extremes) {
            ranges[dimension] = extremes[dimension].max - extremes[dimension].min
        }
        return ranges
    }

    /**
     * Funkcja pobierająca ekstrema
     */
    public getDataExtremes = (points: any): DoubleRange[] => {
        var KMeans = this
        var extremes: DoubleRange[]
        var i
        var point
        var dimension

        for (i in KMeans.data) {
            point = KMeans.data[i]
            for (dimension in point) {
                if (!extremes[dimension]) {
                    extremes[dimension] = { min: 1000, max: 0 };
                }

                if (point[dimension] < extremes[dimension].min) {
                    extremes[dimension].min = point[dimension];
                }

                if (point[dimension] > extremes[dimension].max) {
                    extremes[dimension].max = point[dimension];
                }
            }
        }

        return extremes
    }

    /**
     * Funkcja inicjująca centroidy
     */
    public initializeMeans = (k: number) => {
        var KMeans = this

        if (!k) {
            k = 3;
        }

        while (k--) {
            var mean = [];

            for (var dimension in KMeans.dataExtremes) {
                mean[dimension] = KMeans.dataExtremes[dimension].min + (Math.random() * KMeans.dataRange[dimension]);
            }

            KMeans.means.push(mean);
        }

        return KMeans.means;
    }

    /**
     * Funkcja ustawiająca przynależności
     */
    public makeAssignments = (): void => {
        var KMeans = this

        for (var i in KMeans.data) {
            var point = KMeans.data[i]
            var distances: Number[] = []

            for (var j in KMeans.means) {
                var mean = KMeans.means[j];
                var sum = 0;

                for (var dimension in point) {
                    var difference = point[dimension] - mean[dimension];
                    difference *= difference;
                    sum += difference;
                }

                distances[j] = Math.sqrt(sum);
            }

            KMeans.assignments[i] = distances.indexOf(Math.min.apply(null, distances));
        }
    }

    /**
     * Funkcja przesuwająca centroidy
     */
    public moveMeans = (): boolean => {
        var KMeans = this

        KMeans.makeAssignments()

        var sums = Array(KMeans.means.length)
        var counts = Array(KMeans.means.length)
        var moved: boolean = false

        for (var j in KMeans.means) {
            counts[j] = 0
            sums[j] = Array(KMeans.means[j].length)
            for (var dimension in KMeans.means[j]) {
                sums[j][dimension] = 0
            }
        }

        for (var point_index in KMeans.assignments) {
            var mean_index = KMeans.assignments[point_index]
            var point = KMeans.data[point_index]
            var mean = KMeans.means[mean_index]

            counts[mean_index]++

            for (var dimension in mean) {
                sums[mean_index][dimension] += point[dimension]
            }
        }

        for (var mean_index in sums) {
            if (0 === counts[mean_index]) {
                sums[mean_index] = KMeans.means[mean_index]

                for (var dimension in KMeans.dataExtremes) {
                    sums[mean_index][dimension] = KMeans.dataExtremes[dimension].min + (Math.random() * KMeans.dataRange[dimension])
                }
                continue;
            }

            for (var dimension in sums[mean_index]) {
                sums[mean_index][dimension] /= counts[mean_index]
            }
        }

        if (KMeans.means.toString() !== sums.toString()) {
            moved = true
        }

        KMeans.means = sums

        return moved

    }

    public setupKMeans = (): void => {
        var KMeans = this

        KMeans.dataExtremes = KMeans.getDataExtremes(KMeans.data)
        KMeans.dataRange = KMeans.getRanges(KMeans.dataExtremes)
        KMeans.means = KMeans.initializeMeans(5)
        KMeans.makeAssignments()

        setTimeout(KMeans.runAlgorithm, 1000);
    }

    public runAlgorithm = (): void => {
        var KMeans = this
        var moved = KMeans.moveMeans()

        if (moved) {
            setTimeout(KMeans.runAlgorithm(), 1000)
        }
    }
}